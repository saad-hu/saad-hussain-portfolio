import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
import { Redis } from "@upstash/redis";

class ContactBodyType {
    fullName!: string;
    email!: string;
    message!: string;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const RATE_LIMIT = 5;
const TIME_WINDOW = 2 * 60 * 60; // 2 hours in seconds
const mailReceiver = process.env.RECEIVER_MAIL as string;

export async function POST(req: Request) {
    try {
        await rateLimit(req);

        const body: ContactBodyType = await req.json();

        const invalidFields: string[] = [];
        if (!body.fullName || body.fullName.length > 40) invalidFields.push("Full Name");
        if (!body.email || body.email.length > 40) invalidFields.push("Email");
        if (!body.message || body.message.length > 300) invalidFields.push("Message");

        if (invalidFields.length) {
            throw NextResponse.json({
                success: false,
                message: `Invalid Data for field(s): ${invalidFields.join(", ")}`
            }, { status: 400 });
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: mailReceiver,
            subject: "New Contact Form Submission from Portfolio",
            html: `
                <h3>New Message from ${body.fullName}</h3>
                <p><strong>Full Name:</strong> ${body.fullName}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Message:</strong><br>${body.message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('email sent successfully');

        return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });
    } catch (error) {
        console.error("error: ", error);
        if (error instanceof NextResponse) return error;
        return NextResponse.json({
            success: false, message: "Failed to submit form. Please try again later"
        }, { status: 500 });
    }
}

async function rateLimit(req: Request) {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    console.log(`[req ip: ${ip}] [time: ${Date.now()}]`);

    const cacheKey = `rate-limit:${ip}`
    const currentRequests = await redis.incr(cacheKey);
    console.log(`[current request number: ${currentRequests}]`);

    if (currentRequests === 1) {
        await redis.expire(cacheKey, TIME_WINDOW);
    }

    if (currentRequests > RATE_LIMIT) {
        console.error(`request limit exceeded`);
        throw NextResponse.json(
            { success: false, message: "Rate limit exceeded. Try again later." },
            { status: 429 }
        );
    }

    console.log(`req limit NOT exceeded`);
}
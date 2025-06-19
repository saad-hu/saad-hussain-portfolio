"use client"

import { useState } from "react"
import Input from "../Input"
import TextArea from "../TextArea"
import Button from "../ui/button"
import { Send } from 'lucide-react';
import axios from "axios";
import toast from "react-hot-toast";

const contactFormUrl: string = "/api/contact";

const ContactForm = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const form = event.currentTarget;

        try {
            const formData: FormData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            await axios.post(contactFormUrl, payload);

            toast.success("Form successfully submitted");

            form.reset();

        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong. Please try again later");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
            >

                <div>
                    <label className="label" htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
                    <Input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="John Doe"
                        required
                        maxLength={40}
                    />
                </div>


                <div>
                    <label className="label" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@example.com"
                        required
                        maxLength={40}
                    />
                </div>

                <div>
                    <label className="label" htmlFor="message">Message <span className="text-red-500">*</span></label>
                    <TextArea
                        name="message"
                        id="message"
                        className="h-44 resize-none"
                        maxLength={300}
                        required
                    />
                </div>

                <div className="self-end">
                    <Button
                        border={true}
                        className="px-4"
                        type="submit"
                        rightIcon={<Send width={14} height={14} className="text-primary" />}
                        loading={loading}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
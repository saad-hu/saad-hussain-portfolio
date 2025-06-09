"use client";

import { useRef } from "react";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useScroll, motion, useTransform } from "framer-motion";
import { WavyText } from "./ui/wavy-text";

const Hero = () => {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yPictureContainer = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
    const xTextContainer = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);


    return (
        <div
            className="h-screen relative w-full overflow-hidden"
            ref={containerRef}
        >
            <div className="w-full absolute inset-0 h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={20}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="h-full flex items-center gap-2">
                {/* left text section */}
                <motion.div
                    className="flex-1 pl-10"
                    style={{
                        x: xTextContainer
                    }}
                >
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/14 mb-3.5">
                        <h1 className="text-lg">
                            Hi, I'm <span className="text-white font-bold"><WavyText text="Saad Hussain" /></span>
                        </h1>
                    </div>

                    <TypewriterEffect
                        className="sm:text-xl md:text-3xl lg:text-5xl"
                        words={[
                            { text: "I'm" },
                            { text: "a" },
                            { text: "Full", className: "text-[theme(color-primary)]" },
                            { text: "Stack", className: "text-[theme(color-primary)]" },
                            { text: "Developer.", className: "text-[theme(color-primary)]" },
                            { text: "Let's" },
                            { text: "build" },
                            { text: "and" },
                            { text: "launch" },
                            { text: "amazing" },
                            { text: "apps" },
                            { text: "together." }
                        ]}
                    />
                </motion.div>

                {/* right image section */}
                <motion.div
                    className="h-[80%] flex-1"
                    style={{
                        y: yPictureContainer
                    }}
                >
                    <div className="relative h-full w-[95%]">
                        <Image
                            src="/hero-person.png"
                            alt="hero image"
                            className="w-full h-full object-contain"
                            fill
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
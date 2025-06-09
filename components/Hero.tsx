import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function Hero() {
    return (
        <div className="h-screen relative w-full overflow-hidden">
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
                <div className="flex-1 pl-10">
                    <h1 className="text-lg mb-1.5">Hi, I'm <span>Saad Hussain</span></h1>

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
                </div>

                {/* right image section */}
                <div className="h-[80%] flex-1">
                    <div className="relative h-full w-[95%]">
                        <Image
                            src="/hero-person.png"
                            alt="hero image"
                            className="w-full h-full object-contain"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

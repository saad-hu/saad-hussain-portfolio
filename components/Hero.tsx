"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function Hero() {
    return (
        <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-hidden">
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

            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                Build great products
            </h1>
        </div>
    );
}

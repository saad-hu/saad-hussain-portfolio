"use client"

import { useRef } from 'react'
import dynamic from "next/dynamic";
import { useInView } from 'motion/react';
import { globeConfig, sampleArcs } from '@/lib/constants/world';

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
    ssr: false,
});

const GlobeWrapper = () => {

    const globeContainerRef = useRef(null);
    const globeInView = useInView(globeContainerRef, {
        once: true
    });

    return (
        <div
            className="w-full relative overflow-hidden h-full"
            ref={globeContainerRef}
        >
            {globeInView && (
                <World data={sampleArcs} globeConfig={globeConfig} />
            )}
        </div>
    )
}

export default GlobeWrapper;
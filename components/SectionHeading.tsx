"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

const SectionHeading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children }) => {
    return (
        <motion.h2
            className={cn('section-heading mb-7', className)}
            initial={{
                opacity: 0,
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                opacity: 1
            }}
        >
            {children}
        </motion.h2>
    )
}

export default SectionHeading
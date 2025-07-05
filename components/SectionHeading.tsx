"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

type SectionHeadingProps = React.FC<React.HTMLAttributes<HTMLHeadingElement> & { viewportAmount?: number | "all" | "some" | undefined }>

const SectionHeading: SectionHeadingProps = ({ className, children, viewportAmount = "all" }) => {
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
            viewport={{ amount: viewportAmount }}
        >
            {children}
        </motion.h2>
    )
}

export default SectionHeading
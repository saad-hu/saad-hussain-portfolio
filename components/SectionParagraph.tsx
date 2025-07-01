import React from 'react'
import { cn } from '@/lib/utils'

const SectionParagraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children }) => {
    return (
        <h2
            className={cn('max-w-screen-lg mx-auto px-2 text-center text-sm md:text-lg mb-6', className)}
        >
            {children}
        </h2>
    )
}

export default SectionParagraph
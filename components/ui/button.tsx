"use client"

import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { LoaderCircle } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    border?: boolean;
    rightIcon?: ReactNode;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    border = false,
    type = "button",
    rightIcon,
    loading = false,
    ...props
}) => {
    return (
        <button
            {...props}
            type={type}
            className={cn(
                'hover:bg-[theme(--color-background-secondary)] disabled:bg-gray-500 flex justify-center items-center py-2 px-3 rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer disabled:cursor-not-allowed',
                border ? "border-solid border border-bg-accent" : "",
                className
            )}
            disabled={loading ? true : (props.disabled ? props.disabled : false)}
        >
            <motion.div className="flex items-center gap-1">
                {children}

                {loading && (
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                        }}
                    >
                        <LoaderCircle width={16} height={16} />
                    </motion.div>
                )}

                {!loading && rightIcon && (
                    <div>{rightIcon}</div>
                )}
            </motion.div>
        </button>
    )
}

export default Button
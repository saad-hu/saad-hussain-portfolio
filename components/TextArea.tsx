import { cn } from "@/lib/utils"

const TextArea: React.FC<React.InputHTMLAttributes<HTMLTextAreaElement>> = (props) => {
    return (
        <textarea
            {...props}
            aria-label={props["aria-label"] || props.placeholder || "input field"}
            className={cn(
                "w-full rounded-xl border border-gray-300 px-3 py-2 placeholder-text/40 outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                props.className
            )}
        />
    )
}

export default TextArea;
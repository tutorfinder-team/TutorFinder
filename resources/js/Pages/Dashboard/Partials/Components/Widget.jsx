import InputLabel from "@/Components/InputLabel";
import React from "react";

export default function Widget({
    Icon,
    hint,
    title,
    className,
    children,
    ...props
}) {
    return (
        <div
            {...props}
            className={
                "flex flex-col gap-1 p-6 rounded-2xl backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border shadow-md " +
                className
            }
        >
            <h1 className="text-xl font-medium flexible gap-2">
                <Icon size={20} />
                {title}
            </h1>
            {hint && (
                <InputLabel value={hint} className="ml-0 mb-2 text-sm opacity-60" />
            )}
            {children}
        </div>
    );
}

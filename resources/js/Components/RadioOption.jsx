import React from "react";

export default function RadioOption({
    name,
    id,
    value,
    label,
    helper,
    selected,
}) {
    return (
        <label
            htmlFor={id}
            className="flex items-center gap-2 text-sm duration-50 hover:bg-primary/10 p-1 rounded-lg cursor-pointer font-semibold text-slate-900 dark:text-slate-300"
        >
            <input
                id={id}
                name={name}
                type="radio"
                value={value}
                checked={selected}
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary/0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            {label}
            {helper && (
                <p className="text-xs font-normal text-slate-500 dark:text-slate-300">
                    {helper}
                </p>
            )}
        </label>
    );
}

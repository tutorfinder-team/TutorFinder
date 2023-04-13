import React from "react";

export default function Radio({name, id, value, label, helper, checked, onChange}) {
    return (
        <div className="flex">
            <div className="flex items-center h-5">
                <input
                    id={id}
                    name={name}
                    type="radio"
                    value={value}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary/0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"

                />
            </div>
            <div className="ml-2 text-sm">
                <label
                    htmlFor={id}
                    className="font-semibold text-slate-900 dark:text-slate-300"
                >
                    {label}
                </label>
               {helper && <p
                    className="text-xs font-normal text-slate-500 dark:text-slate-300"
                >
                    {helper}
                </p>}
            </div>
        </div>
    );
}

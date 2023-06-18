import { Link } from "@inertiajs/react";
import React from "react";

export default function Paginator({ data, count }) {
    return (
        data && data.link && data.links.length > 3 && (
            <div className="flexible-center flex-col gap-2">
                <span className="text-slate-700/70 font-normal text-sm dark:text-slate-100/70">
                    Showing {data.data.length} out of {count}
                </span>
            <nav aria-label="Page navigation">
                <ul className="inline-flex items-center -space-x-px">
                    {data.links.map((link) => {
                        if (
                            link.label.includes("Previous") ||
                            link.label.includes("Next")
                        ) {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={`${
                                        !link.url
                                            ? "text-gray-500 bg-white border border-gray-300 dark:bg-darker dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
                                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    } px-3 py-2 leading-tight ${
                                        link.label.includes("Previous")
                                            ? "rounded-l-lg"
                                            : "rounded-r-lg"
                                    }`}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {link.label.includes("Previous") ? (
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        ) : (
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        )}
                                    </svg>
                                </Link>
                            );
                        } else {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={`${
                                        link.active
                                            ? "text-gray-500 bg-white border border-gray-300 dark:bg-darker dark:border-gray-700 dark:text-gray-400 cursor-not-allowed"
                                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    } px-3 py-2 leading-tight`}
                                >
                                    {link.label}
                                </Link>
                            );
                        }
                    })}
                </ul>
            </nav>
            </div>
        )
    );
}

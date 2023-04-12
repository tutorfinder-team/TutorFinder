import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent({ children, onClick, links }) {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="flexible"
                    onMouseEnter={() => setIsShowing(true)}
                    onMouseLeave={() => setIsShowing(false)}
                >
                    {children}
                </Menu.Button>
            </div>

            <Transition
                show={isShowing}
                onMouseEnter={() => setIsShowing(true)}
                onMouseLeave={() => setIsShowing(false)}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="menuItems absolute -left-20 py-2 w-40 mt-2 z-50 origin-top-left bg-white dark:bg-dark dark:border dark:border-gray-700/40 rounded-md shadow-lg ring-1 ring-darker ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {links.map((item, index) => {
                            let style = item.style || {
                                color: "text-gray-500 dark:text-white",
                                activeColor:
                                    "bg-primary/5 dark:bg-slate-300/5 text-gray-700 dark:text-white",
                            };
                            return (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <Link
                                            href={route(item.to)}
                                            method={item.method || "get"}
                                            as="button"
                                            className={classNames(
                                                active
                                                    ? style.activeColor
                                                    : style.color,
                                                "block w-full text-left px-6 py-2 text-md font-light duration-150"
                                            )}
                                        >
                                            {item.Icon && (
                                                <item.Icon className="inline-block mr-2" />
                                            )}
                                            {item.label}
                                        </Link>
                                    )}
                                </Menu.Item>
                            );
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { BiCollection, BiPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { GoDashboard } from "react-icons/go";
import { SiSessionize } from "react-icons/si";

function ListItem({ name, route, Icon }) {
    return (
        <li className="text-lg font-semibold py-5 px-5">
            <Link
                href={route}
                className="flex items-center duration-150 text-gray-900 rounded-xl dark:text-white bg-slate-500/5 hover:bg-slate-500/10 dark:hover:bg-slate-200/10 dark:bg-slate-200/5 py-3 px-4"
            >
                <Icon size={23} />
                <span className="ml-3">{name}</span>
            </Link>
        </li>
    );
}

export default function SideBar() {
    const user = usePage().props.auth.user;
    return (
        <aside
            id="default-sidebar"
            className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full pb-10 pt-10 overflow-y-auto backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border-r">
                <ul className="font-medium">
                    <ListItem
                        name="Dashboard"
                        route="/dashboard"
                        Icon={GoDashboard}
                    />
                    <ListItem
                        name="Sessions"
                        route="/dashboard/sessions"
                        Icon={BiCollection}
                    />
                </ul>
                <div className="px-5 py-6">
                    {user.ROLE === "TEACHER" ? (
                        <Link href="/dashboard/create">
                            <PrimaryButton className="w-full flexible-center gap-2">
                                <BiPlus size={20} />
                                Create New Session
                            </PrimaryButton>
                        </Link>
                    ) : (
                        <InputLabel
                            value="Become a teacher to create a session"
                            className="ml-0 text-sm opacity-60"
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}

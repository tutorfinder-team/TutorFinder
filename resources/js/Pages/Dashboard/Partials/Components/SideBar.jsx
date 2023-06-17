import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";
import { BiCollection, BiPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { GoDashboard } from "react-icons/go";
import { SiSessionize } from "react-icons/si";

function ListItem({ name, route, Icon }) {
    return (
        <li className="text-lg font-semibold border-apply border-b py-5 px-5">
            <Link
                href={route}
                class="flex items-center duration-150 text-gray-900 rounded-xl dark:text-white hover:bg-slate-400/10 dark:hover:bg-slate-200/10 py-3 px-4"
            >
                <Icon size={23} />
                <span class="ml-3">{name}</span>
            </Link>
        </li>
    );
}

export default function SideBar() {
    return (
        <aside
            id="default-sidebar"
            class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div class="h-full pb-10 overflow-y-auto backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border-r">
                <ul class="font-medium">
                    <ListItem
                        name="Dashboard"
                        route="/dashboard"
                        Icon={GoDashboard}
                    />
                    <ListItem
                        name="Sessions"
                        route="/dashboard"
                        Icon={BiCollection}
                    />
                    <ListItem
                        name="Enrollements"
                        route="/dashboard"
                        Icon={BsPeople}
                    />
                </ul>
                <div className="px-4 py-6">
                    <PrimaryButton className="w-full flexible-center gap-2">
                        <BiPlus size={20} />
                        Create New Session
                    </PrimaryButton>
                </div>
            </div>
        </aside>
    );
}

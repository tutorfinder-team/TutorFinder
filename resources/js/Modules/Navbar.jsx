import Logo from "../Components/Logo";
import Dropdown from "./parts/Dropdown";
import Spinner from "./parts/Spinner";
import { CgProfile, CgLogOut } from "react-icons/cg";
import Avatar from "../Components/Avatar";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useDarkMode } from "@/Hooks";
import { RiMoonClearLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import Gradient from "@/Components/Gradient";
import Pipe from "@/Components/Pipe";
import { FiSettings } from "react-icons/fi";

export default function Navbar({ user }) {
    const [isDark, setDarkMode] = useDarkMode();
    const dropdownMenu = [
        {
            to: "profile.edit",
            label: "Profile",
            Icon: CgProfile,
        },
        {
            to: "settings.edit",
            label: "Settings",
            Icon: FiSettings,
        },
        {
            to: "logout",
            label: "Logout",
            Icon: CgLogOut,
            method: "post",
            style: {
                activeColor: "bg-red-500/5 text-red-500",
                color: "text-red-400",
            },
        },
    ];

    const currentRoute = route().current();
    return (
        <>
            <Gradient />
            <nav className="sticky top-0 w-full backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border-b ">
                <div className="container mx-auto">
                    <div className="py-3">
                        <div className="flexible justify-between">
                            <Logo className="w-[10rem]" />
                            <div className="redirect flexible gap-4 text-[0.95rem]">
                                <div className="nav-links">
                                    <Link href="/" className={`ml-4 p-2 font-semibold hoverEffect ${currentRoute === 'sessions.index' && 'text-primary'}`}>Home</Link>
                                    {user && <Link href="/dashboard" className={`ml-4 p-2 font-semibold hoverEffect ${currentRoute.includes('dashboard') && 'text-primary'}`}>Dashboard</Link>}
                                </div>
                                <Pipe />
                                {!user ? (
                                    <div className="sm:block hidden">
                                        <Link href="/login">
                                            <span className="font-medium hoverEffect pr-4">
                                                Sign in
                                            </span>
                                        </Link>
                                        <Link href="/register">
                                            <PrimaryButton className="text-md">
                                                Sign up
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                ) : !user ? (
                                    <Spinner className="text-darker w-8 h-8" />
                                ) : (
                                    <>
                                        <Dropdown links={dropdownMenu}>
                                            <Avatar
                                                img={user.picture}
                                                name={user.name}
                                                className="cursor-pointer w-10 rounded-full hoverMode"
                                            />
                                        </Dropdown>
                                    </>
                                )}
                                <button onClick={() => setDarkMode(!isDark)} className="bg-transparent duration-300 hover:bg-primary/10 rounded-full box-border p-2">
                                    {isDark ? (
                                        <BiSun
                                            size={23}
                                            className="text-primary"
                                        />
                                    ) : (
                                        <RiMoonClearLine
                                            size={21}
                                            className="text-primary"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

import Logo from "../Components/Logo";
import Dropdown from "./parts/Dropdown";
import Spinner from "./parts/Spinner";
import { CgProfile, CgLogOut } from "react-icons/cg";
import Avatar from "./parts/Avatar";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Header({ user }) {
    const dropdownMenu = [
        {
            to: "profile.edit",
            label: "Profile",
            Icon: CgProfile,
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

    return (
        <>
            <div className="container bg-white dark:bg-dark h-20 flexible justify-between">
                <Logo />
                <div className="redirect flexible gap-4 text-[0.95rem]">
                    {!user ? (
                        <div className="sm:block hidden">
                            <Link href="/login">
                                <span className="text-gray-500 dark:text-white font-medium text-[1rem] px-4">
                                    Sign in
                                </span>
                            </Link>
                            <Link href="/register">
                                <PrimaryButton className="">Sign up</PrimaryButton>
                            </Link>
                        </div>
                    ) : !user ? (
                        <Spinner className="text-darker w-8 h-8" />
                    ) : (
                        <>
                            <Dropdown links={dropdownMenu}>
                                <Avatar
                                    img={user.avatar}
                                    name={user.name}
                                    options={{
                                        className: `cursor-pointer w-12 rounded-full hoverMode`,
                                    }}
                                />
                            </Dropdown>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

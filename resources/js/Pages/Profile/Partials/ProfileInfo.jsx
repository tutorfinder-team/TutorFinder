import React from "react";
import { BiUser } from "react-icons/bi";
import CardLayout from "./CardLayout";
import InputLabel from "@/Components/InputLabel";
import Badge from "@/Components/Badge";
import { formatDate, isObjectEmpty, randColor } from "@/utils/utils";
import { Link, usePage } from "@inertiajs/react";
import FormEditProfile from "../Forms/Profile/FormEditProfile";

export default function ProfileInfo({ user, percentage }) {
    const { canEdit } = usePage().props;
    return (
        <CardLayout
            cardName="Profile Info"
            cardProps={
                (!user.birthdate ||
                !user.phone_number) && { percentage, percentageToAdd: 50 }
            }
            Icon={BiUser}
            FormModal={canEdit && FormEditProfile}
        >
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <InputLabel className="opacity-[0.5]" value="Username" />
                    <h1 className="ml-1 text-lg font-semibold">
                        {user.username}
                    </h1>
                </div>
                <div>
                    <InputLabel className="opacity-[0.5]" value="Full Name" />
                    <h1 className="ml-1 text-lg font-semibold">{user.name}</h1>
                </div>
                <div>
                    <InputLabel className="opacity-[0.5]" value="Email" />
                    <h1 className="ml-1 text-lg font-semibold">{user.email}</h1>
                </div>
                <div>
                    <InputLabel className="opacity-[0.5]" value="Status" />
                    <h1 className="ml-1 text-lg font-semibold">{user.ROLE}</h1>
                </div>
                {user.phone && (
                    <div>
                        <InputLabel className="opacity-[0.5]" value="Phone" />
                        <h1 className="ml-1 text-lg font-semibold">
                            {user.phone}
                        </h1>
                    </div>
                )}
                {user.address && (
                    <div>
                        <InputLabel className="opacity-[0.5]" value="Address" />
                        <h1 className="ml-1 text-lg font-semibold">
                            {user.address}
                        </h1>
                    </div>
                )}
                {user.phone_number && (
                    <div>
                        <InputLabel
                            className="opacity-[0.5]"
                            value="Phone Number"
                        />
                        <h1 className="ml-1 text-lg font-semibold">
                            {user.phone_number}
                        </h1>
                    </div>
                )}
                {user.birthdate && (
                    <div>
                        <InputLabel
                            className="opacity-[0.5]"
                            value="Birthdate"
                        />
                        <h1 className="ml-1 text-lg font-semibold">
                            {formatDate(user.birthdate)}
                        </h1>
                    </div>
                )}
                {user.skills && (
                    <div>
                        <InputLabel className="opacity-[0.5]" value="Skills" />
                        {user.skills.split(",").map((skill) => {
                            skill = skill.trim();
                            return (
                                <Link key={skill} href={`/?search=${skill}`}>
                                    <Badge
                                        key={skill}
                                        text={skill}
                                        className={`px-3 my-1`}
                                        style={{ backgroundColor: randColor() }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                )}
                <div>
                    <InputLabel
                        className="opacity-[0.5]"
                        value="Member Since"
                    />
                    <h1 className="ml-1 text-lg font-semibold">
                        {formatDate(user.created_at)}
                    </h1>
                </div>
            </div>
        </CardLayout>
    );
}

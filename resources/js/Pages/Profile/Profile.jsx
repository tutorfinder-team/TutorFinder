import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";
import Avatar from "../../Components/Avatar";
import { CgClose } from "react-icons/cg";
import Resume from "./Partials/Resume";
import Experience from "./Partials/Experience";
import Education from "./Partials/Education";
import Certification from "./Partials/Certification";
import ProfileInfo from "./Partials/ProfileInfo";
import Stars from "@/Components/Stars";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Profile({
    user,
    experiences,
    educations,
    certification,
    resume,
}) {
    const [showAlert, setShowAlert] = useState(false);
    const [cookies, setCookie] = useCookies(["showAlert"]);

    

    useEffect(() => {
        if (cookies.showAlert === "false") {
            setShowAlert(false);
        } else setShowAlert(true);
    }, []);
    return (
        <MainLayout user={user}>
            {user.ROLE === "STUDENT" && (
                <div
                    className={`fixed w-full py-2 px-10 bg-primary text-white flexible gap-2 ${
                        !showAlert && "invisible"
                    }`}
                >
                    <CgClose
                        className="cursor-pointer"
                        onClick={() => {
                            setShowAlert(false);
                            setCookie("showAlert", false, {
                                maxAge: 500, // Expires after 8min
                                sameSite: true,
                            });
                        }}
                    />
                    <p>
                        In order to <strong>post a session</strong>, you need to
                        complete your profile
                    </p>
                </div>
            )}
            <Head title="Profile" />
            <div className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8 space-y-6">
                <div className="flexible gap-3 flex-col">
                    <Avatar
                        name={user.name}
                        img={user.picture}
                        className="rounded-full h-40"
                    />
                    <h2 className="font-semibold text-3xl">
                        {toCapital(user.name)}
                    </h2>
                    <h3 className="text-lg">{toCapital(user.email)}</h3>
                    {user.rating && <Stars rating={user.rating} />}
                </div>
                <div className="pt-6">
                    <ProfileInfo user={user} />
                </div>
                <div className="pt-1">
                    <div className="cards grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="self-start">
                            <Resume data={resume} />
                        </div>
                        <div className="self-start">
                            <Experience data={experiences} />
                        </div>
                        <div className="self-start">
                            <Education data={educations} />
                        </div>
                        <div className="self-start">
                            <Certification data={certification} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

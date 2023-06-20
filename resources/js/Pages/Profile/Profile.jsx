import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head, Link, usePage } from "@inertiajs/react";
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
import FeedbacksCard from "../Sessions/Session/Partials/FeedbacksCard";
import InputLabel from "@/Components/InputLabel";

export default function Profile({
    user,
    canEdit,
    experiences,
    educations,
    certification,
    resume,
    feedbacks,
}) {
    const [showAlert, setShowAlert] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [cookies, setCookie] = useCookies(["showAlert"]);

    const profileCompeletionPercentage = () => {
        let percentage = 0;
        if (user.name) percentage += 25;
        if (user.phone_number) percentage += 25;
        if (user.birthdate) percentage += 25;
        if (resume) percentage += 25;
        return percentage;
    };

    useEffect(() => {
        setPercentage(profileCompeletionPercentage());
        if (cookies.showAlert === "false") {
            setShowAlert(false);
        } else setShowAlert(true);
    }, [user, showAlert, resume]);
    return (
        <MainLayout user={user}>
            {canEdit && user.ROLE === "STUDENT" && (
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
                                maxAge: 800, // Expires after 10min
                                sameSite: true,
                            });
                        }}
                    />
                    {percentage !== 100 ? (
                        <p>
                            In order to <strong>post a session</strong>, you
                            need to complete your profile.{" "}
                            <strong>
                                Your profile is {percentage}% complete
                            </strong>
                            .
                        </p>
                    ) : (
                        <p>
                            Your profile is {percentage}% complete,{" "}
                            <strong>Become a teacher now</strong>.
                        </p>
                    )}
                </div>
            )}
            <Head title="Profile" />
            <div className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8 space-y-6">
                <div className="flexible gap-3 flex-col">
                    <Avatar
                        name={user?.name || user?.fullname}
                        img={user.picture}
                        className="rounded-full h-40"
                    />
                    <h2 className="font-semibold text-3xl">
                        {toCapital(user.name)}
                    </h2>
                    <h3 className="text-lg">{toCapital(user.email)}</h3>
                    {percentage === 100 &&
                    user.ROLE === "STUDENT" &&
                    canEdit ? (
                        <Link
                            href="/become-a-teacher"
                            method="post"
                            as="button"
                        >
                            <h3 className="text-primary font-semibold">
                                Click here to become a teacher
                            </h3>
                        </Link>
                    ) : (
                        user.ROLE === "TEACHER" && (
                            <Stars rating={user.rating} />
                        )
                    )}
                </div>
                <div className="pt-3">
                    <ProfileInfo user={user} percentage={percentage} />
                </div>
                <div className="pt-1">
                    <div className="cards grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="self-start">
                            <Resume data={resume} percentage={percentage} />
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
                {user.ROLE === "TEACHER" && (
                    <div>
                        <InputLabel
                            value="Feedbacks"
                            className="font-semibold text-[1.05rem]"
                        />
                        <div className="my-4">
                            <FeedbacksCard grid="grid grid-cols-4 gap-x-4 " feedbacks={feedbacks} />
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

import Card from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";
import Avatar from "../../Components/Avatar";
import { BiPlus, BiTrophy } from "react-icons/bi";
import { CgPen } from "react-icons/cg";
import SecondaryButton from "@/Components/SecondaryButton";
import Resume from "./Partials/Resume";
import Experience from "./Partials/Experience";
import Education from "./Partials/Education";
import Certification from "./Partials/Certification";

export default function Profile({
    auth: { user },
    experiences,
    educations,
    certification,
}) {
    return (
        <MainLayout user={user}>
            <Head title="Profile" />
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 space-y-6">
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
                </div>
                <div className="py-6">
                    <div className="cards grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="self-start">
                            <Resume />
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

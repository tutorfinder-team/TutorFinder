import Card from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";
import Avatar from "../../Components/Avatar";
import { BiPlus, BiTrophy } from "react-icons/bi";
import { CgPen } from "react-icons/cg";
import SecondaryButton from "@/Components/SecondaryButton";
import Resume from "./Partials/Resume";
import Skills from "./Partials/Skills";
import Education from "./Partials/Education";
import Certifications from "./Partials/Certifications";

export default function Profile({ auth: { user } }) {
    return (
        <MainLayout user={user}>
            <Head title="Profile" />
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 space-y-6">
                <div className="flexible gap-3 flex-col">
                    <Avatar name={user.name} className="rounded-full h-40" />
                    <h2 className="font-semibold text-3xl">
                        {toCapital(user.name)}
                    </h2>
                    <h3 className="text-lg">{toCapital(user.email)}</h3>
                </div>
                <div className="py-6">
                    
                    <div className="cards grid grid-cols-2 gap-x-6 gap-y-3">
                    
                    <Resume />
                    <Skills />
                    <Education />
                    <Certifications/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

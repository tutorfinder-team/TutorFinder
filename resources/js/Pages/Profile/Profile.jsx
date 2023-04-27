import Card from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";
import Avatar from "../../Components/Avatar";
import { AiFillFileAdd } from "react-icons/ai";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus, BiTrophy } from "react-icons/bi";
import {MdCastForEducation} from "react-icons/md";
import { CgPen } from "react-icons/cg";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import { useRef } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FiFile, FiFilePlus } from "react-icons/fi";

export default function Profile({ auth: { user } }) {
    const inputRef = useRef();
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
                    {/* the card below can be put in a seperate component
                    with different props so you can reuse it multiple
                    time **Take the useRef above with it too (const inputRef) ** */}
                    {/* And you can learn grid for making a great layout for example see this div below */}
                    {/* Be creative and use chatGPT or phind.com for help */}
                    <div className="cards grid grid-cols-2 gap-4">
                        <Resume/>
                        {/* So instead of duplicating the divs like this
                        you can make one component that shares the same layout and then
                        changes it props accordenly */}
                        <Card className="p-0">
                            <div className="header flexible justify-between py-3 px-5 border-b border-apply">
                                <div className="flexible gap-2">
                                    <BiTrophy />
                                    <h1>Skills</h1>
                                </div>
                                <div>
                                    <SecondaryButton className="py-3">
                                        <BiPlus size={21} />
                                    </SecondaryButton>
                                </div>
                            </div>
                            <div className=" py-3 px-12 ">
                                <h1> No resume uploaded  yet.</h1>
                            </div>
                        </Card>
                        {/* Education  */}
                        <Card className="p-0">
                            <div className="header flexible justify-between py-3 px-5 border-b border-apply">
                                <div className="flexible gap-2">
                                    <CgPen />
                                    <h1>Education</h1>
                                </div>
                                <div>
                                    <SecondaryButton className="py-3">
                                        <BiPlus size={21} />
                                    </SecondaryButton>
                                </div>
                                <div className="content py-3 px-12 ">
                                    <h1> Education </h1>
                                </div>
                            </div>
                            <div className=" py-3 px-12 ">
                                <h1> Add your experiences </h1>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

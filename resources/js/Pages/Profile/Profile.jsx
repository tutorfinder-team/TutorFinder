import Card from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";
import Avatar from "../../Components/Avatar";
import { AiFillFileAdd } from "react-icons/ai";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Profile({ auth: { user } }) {
    return (
        <MainLayout user={user}>
            <Head title="Profile" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <Card>
                    <div className="">
                        <div className="flexible gap-6">
                            <hr className="w-[50%] border-slate-400" />
                            <Avatar
                                name="yasen"
                                className="rounded-full h-20"
                            />
                            <hr className="w-[50%] border-slate-400" />
                        </div>
                        <div className="flexible-center flex-col gap-2 mb-6">
                            <h2 className=" font-semibold mt-3 text-2xl ">
                                Yasen Doukali
                            </h2>
                            <h2 className=" italic text-sm">
                                yssnmed@gmail.com
                            </h2>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 ">
                    <Card className="flexible gap-x-40	">
                        <div className="flexible gap-2">
                        <AiFillFileAdd className="gap-"/> <h1>Resume</h1>  
                        </div>
                        <div className="flexible ">                              
                        {/* <button className="btn-primary">+</button> */}
                        <input
                            type="file"
                            class="block w-full text-xs text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-50 file:text-gray-700
                            hover:file:bg-blue-100"
                            />
                            </div>
                    </Card>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Card>Hello, {toCapital(user.name)}</Card>
                    <h1></h1>
                </div>
            </div>
        </MainLayout>
    );
}

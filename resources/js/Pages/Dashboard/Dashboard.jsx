import MainLayout from "@/Layouts/MainLayout";
import Tabs from "@/Modules/additional/Tabs";
import { Head, usePage } from "@inertiajs/react";
import SideBar from "./Partials/Components/SideBar";
import MainContent from "./Partials/Components/MainContent";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <MainLayout>
            <Head title="Dashboard" />
            <div className="">
                <SideBar />
                <MainContent></MainContent>
            </div>
        </MainLayout>
    );
}

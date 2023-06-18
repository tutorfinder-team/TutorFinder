import MainLayout from "@/Layouts/MainLayout";
import Tabs from "@/Modules/additional/Tabs";
import { Head, usePage } from "@inertiajs/react";
import SideBar from "./Partials/Components/SideBar";
import DashboardContent from "./Partials/DashboardContent";
import DashboardLayout from "./Partials/Components/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Head title="Dashboard" />
            <DashboardContent></DashboardContent>
        </DashboardLayout>
    );
}

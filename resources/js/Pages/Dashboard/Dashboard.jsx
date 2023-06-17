import MainLayout from "@/Layouts/MainLayout";
import Tabs from "@/Modules/additional/Tabs";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return <MainLayout>

    </MainLayout>;
}

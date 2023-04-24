import Card from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { toCapital } from "@/utils/utils";
import { Head } from "@inertiajs/react";

export default function Profile({ auth: {user} }) {
    return (
        <MainLayout
            user={user}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Card>Hello, {toCapital(user.name)}</Card>
                </div>
            </div>
        </MainLayout>
    );
}

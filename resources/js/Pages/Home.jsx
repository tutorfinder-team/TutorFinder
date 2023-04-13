import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import Sessions from "@/Pages/Sessions/Sessions";
import { Head } from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <MainLayout user={auth.user}>
            <Head title="Home" />

            <div className="container">
                <Sessions />
            </div>
        </MainLayout>
    );
}

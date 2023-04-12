import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="">

            </div>
        </MainLayout>
    );
}

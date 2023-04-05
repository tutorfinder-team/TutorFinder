import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <AppLayout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="">
                hello
            </div>
        </AppLayout>
    );
}

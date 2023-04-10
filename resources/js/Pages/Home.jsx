import MainLayout from '@/Layouts/MainLayout';
import Hero from '@/Modules/Hero';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="">
                <Hero isLogged={auth.user} />
                
            </div>
        </MainLayout>
    );
}

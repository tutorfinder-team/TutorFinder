import Navbar from "@/Modules/Navbar";

export default function MainLayout({ user, children }) {
    return (
        <div className="min-h-screen text-slate-700 dark:text-white bg-white dark:bg-darker">
            <Navbar user={user} />
            <main className="relative z-40">
                {children}
            </main>
        </div>
    );
}

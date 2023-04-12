import Navbar from "@/Modules/Navbar";

export default function MainLayout({ user, children }) {
    return (
        <div className="min-h-screen bg-grid-slate-900 text-slate-700 dark:text-white bg-white dark:bg-darker">
            <Navbar user={user} />
            <main className="relative z-40">
                {children}
            </main>
        </div>
    );
}

import Navbar from "@/Modules/Navbar";

export default function MainLayout({ user, children }) {
    return (
        <div className="min-h-screen box-border bg-grid-slate-900  text-slate-900 dark:text-slate-200 bg-white dark:bg-darker">
            <Navbar user={user} />
            <main className="relative z-40">
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    );
}

import Header from "@/Modules/Header";

export default function MainLayout({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-darker">
            <Header user={user} />
            <main>
                {children}
            </main>
        </div>
    );
}

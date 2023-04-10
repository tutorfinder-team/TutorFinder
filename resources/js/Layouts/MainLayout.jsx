import Header from "@/Modules/Header";
import { Children, useState } from "react";

export default function MainLayout({ user, children }) {
    console.log(user);
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header user={user} />
            <main>
                {children}
            </main>
        </div>
    );
}

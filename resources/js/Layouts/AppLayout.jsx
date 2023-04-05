import { Children, useState } from "react";

export default function AppLayout({ user, children }) {
    return (
        <>
            <p>Navbar</p>
            <main>
                {children}
            </main>
            <p>Footer</p>
        </>
    );
}

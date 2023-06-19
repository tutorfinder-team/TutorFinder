import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import SessionCard from "./SessionCard";
import { usePage } from "@inertiajs/react";

export default function SessionsFeed({ sessions }) {
    return (
        <>
            <div className="flexible justify-between">
                <h1 className="mb-4 text-xl sm:text-3xl tracking-tight font-extrabold flexible gap-2">
                    Available Sessions{" "}
                </h1>
            </div>
            {/* Render session items */}
            {sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
            ))}
        </>
    );
}

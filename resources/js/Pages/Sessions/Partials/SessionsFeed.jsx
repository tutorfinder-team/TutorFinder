import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import SessionCard from "./SessionCard";

export default function SessionsFeed({sessions}) {
    return (
        <>
            <div className="flexible justify-between">
                <h1 className="mb-4 text-xl sm:text-3xl tracking-tight font-extrabold flexible gap-2">
                    Available Sessions{" "}
                    <span className="text-slate-700/50 font-medium text-xl dark:text-slate-100/50">
                        {"( "}
                        {sessions.length}
                        {" )"}
                    </span>
                </h1>
            </div>
            {/* Render session items */}
            {sessions.map((session) => (
                <SessionCard key={session.id} session={session}/>
            ))}
        </>
    );
}

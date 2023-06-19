import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import InputLabel from "@/Components/InputLabel";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function ActivityCard({
    modal = 0,
    session,
    grid = "grid-cols-2",
    more,
}) {
    const user = usePage().props.auth.user;
    return (
        <div className={`mt-4 grid ${grid} gap-x-4`}>
            {session &&
            (session.is_active || (modal && !session.is_active)) &&
            session.enrollments.length > 0 ? (
                <>
                    {session.enrollments.map((e) => (
                        <Card className="mb-2 self-start">
                            <div>
                                <div className="flexible gap-3">
                                    <Avatar
                                        name={e.username}
                                        img={e.picture}
                                        className="w-12 rounded-full"
                                    />
                                    <div>
                                        <Link href={`/profile/${e.username}`}>
                                            <h1 className="font-semibold hover:text-primary duration-100">
                                                {e.id === user.id
                                                    ? "You"
                                                    : e.username}
                                            </h1>
                                        </Link>
                                        <InputLabel
                                            value={`Joined the session in ${e.date}`}
                                            className="-ml-0.5 text-sm opacity-60"
                                        />
                                    </div>
                                </div>
                                {(session.user.id === user.id ||
                                    e.id === user.id) && (
                                    <p className="mt-2">
                                        <span className="ml-0 text-sm opacity-60 mr-4">
                                            NOTE
                                        </span>{" "}
                                        {e.note ? e.note : "No note provided"}
                                    </p>
                                )}
                                {more && (
                                    <p className="mt-2 text-sm uppercase text-primary font-bold">
                                        { session.is_active == 0 &&
                                            session.feedbacks.filter(f => f.user_id == e.id).length === 0 ?
                                                "Didn't rate yet" : "rated"}
                                    </p>
                                )}
                            </div>
                        </Card>
                    ))}
                </>
            ) : (
                <InputLabel
                    value="No activity"
                    className="ml-0 text-sm opacity-60"
                />
            )}
        </div>
    );
}

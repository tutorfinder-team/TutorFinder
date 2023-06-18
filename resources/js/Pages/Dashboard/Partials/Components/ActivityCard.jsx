import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import InputLabel from "@/Components/InputLabel";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function ActivityCard({ session }) {
    const user = usePage().props.auth.user
    return (
        <div className="mt-4 grid grid-cols-2">
            {session && session.enrollments.length > 0 ? (
                <Card className="mb-2">
                    {session.enrollments.map((e) => (
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
                                            {e.id === user.id ? 'You' : e.username}
                                        </h1>
                                    </Link>
                                    <InputLabel
                                        value={`Joined the session in ${e.date}`}
                                        className="-ml-0 text-sm opacity-60"
                                    />
                                </div>
                            </div>
                            {
                                (session.user.id === user.id || e.id === user.id) &&
                                <p className="mt-2">
                                    <span className="ml-0 text-sm opacity-60 mr-4">
                                        NOTE
                                    </span>{" "}
                                    {e.note ? e.note : "No note provided"}
                                </p>
                            }
                        </div>
                    ))}
                </Card>
            ) : (
                <InputLabel
                    value="No activity"
                    className="ml-0 text-sm opacity-60"
                />
            )}
        </div>
    );
}

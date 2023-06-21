import {
    BsBookmark,
    BsBookmarkFill,
    BsCalendar,
    BsPeople,
    BsPeopleFill,
} from "react-icons/bs";
import Widget from "./Components/Widget";
import { BiBook, BiNotification } from "react-icons/bi";
import InputLabel from "@/Components/InputLabel";
import { usePage } from "@inertiajs/react";
import { MdBookOnline } from "react-icons/md";
import Card from "@/Components/Card";
import Avatar from "@/Components/Avatar";
import ActivityCard from "./Components/ActivityCard";
import { formatDate } from "@/utils/utils";

export default function DashboardContent() {
    const user = usePage().props.auth.user;
    const sessions = usePage().props.sessions?.data;
    const enrollments = usePage().props.enrollments?.data;
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                {user.ROLE === "TEACHER" && sessions && (
                    <>
                        <Widget
                            Icon={BsCalendar}
                            title="Upcoming Date"
                            hint="Date of the upcoming session"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {sessions.length > 0 &&
                                sessions[0].is_active === 1
                                    ? sessions[0].scheduled_time
                                    : "-"}
                            </p>
                        </Widget>
                        <Widget
                            Icon={BsPeople}
                            title="Students"
                            hint="Total number of students enrolled in the upcoming session"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {sessions.length > 0 &&
                                sessions[0].is_active === 1
                                    ? sessions[0].enrollments.length
                                    : "-"}
                            </p>
                        </Widget>
                        <Widget
                            Icon={BiBook}
                            title="Active Sessions"
                            hint="Total number of active sessions"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {sessions.filter((s) => s.is_active).length}
                            </p>
                        </Widget>
                    </>
                )}
                {user.ROLE === "STUDENT" && enrollments && (
                    <>
                        <Widget
                            Icon={BsCalendar}
                            title="Upcoming Date"
                            hint="Date of the upcoming session"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {enrollments.length > 0 &&
                                enrollments[0].session.is_active
                                    ? formatDate(
                                          enrollments[0].session.scheduled_time
                                      )
                                    : "-"}
                            </p>
                        </Widget>
                        <Widget
                            Icon={BsPeople}
                            title="Upcoming Sessions"
                            hint="Total number of your upcoming sessions"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {
                                    enrollments.filter(
                                        (e) =>
                                            e.session.is_active &&
                                            new Date(e.session.scheduled_time) >
                                                new Date()
                                    ).length
                                }
                            </p>
                        </Widget>
                        <Widget
                            Icon={BsBookmark}
                            title="Total Enrollements"
                            hint="Total number of enrollements"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">
                                {enrollments.length}
                            </p>
                        </Widget>
                    </>
                )}
            </div>
            <Widget
                Icon={BiNotification}
                title="Notifications"
                className="mb-4"
            >
                {user.ROLE === "TEACHER" && (
                    <>
                        <InputLabel
                            value="Your Sessions"
                            className="ml-0 text-lg mt-4"
                        />
                        {sessions.length > 0 ? (
                            <ActivityCard session={sessions[0]} />
                        ) : (
                            <InputLabel
                                value="No activity"
                                className="ml-0 text-sm opacity-60"
                            />
                        )}
                        <InputLabel
                            value="Your Enrollments"
                            className="ml-0 text-lg mt-4"
                        />
                        {enrollments.length > 0 ? (
                            <ActivityCard session={enrollments[0].session} />
                        ) : (
                            <InputLabel
                                value="No activity"
                                className="ml-0 text-sm opacity-60"
                            />
                        )}
                    </>
                )}
                {user.ROLE === "STUDENT" && (
                    <>
                        {enrollments.length > 0 ? (
                            <ActivityCard session={enrollments[0].session} />
                        ) : (
                            <InputLabel
                                value="No activity"
                                className="ml-0 text-sm opacity-60"
                            />
                        )}
                    </>
                )}
            </Widget>
        </div>
    );
}

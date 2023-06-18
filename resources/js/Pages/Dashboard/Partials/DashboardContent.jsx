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

export default function DashboardContent() {
    const user = usePage().props.auth.user;
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <Widget
                    Icon={BsCalendar}
                    title="Upcoming Date"
                    hint="Date of the upcoming session"
                    className="h-40"
                >
                    <p className="text-2xl font-semibold">1,232</p>
                </Widget>
                {user.ROLE === "TEACHER" ? (
                    <>
                        <Widget
                            Icon={BsPeople}
                            title="Students"
                            hint="Total number of students enrolled in the upcoming session"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">1,232</p>
                        </Widget>
                        <Widget
                            Icon={BiBook}
                            title="Active Sessions"
                            hint="Total number of active sessions"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">1,232</p>
                        </Widget>
                    </>
                ) : (
                    <>
                        <Widget
                            Icon={BsPeople}
                            title="Upcoming Sessions"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">1,232</p>
                        </Widget>
                        <Widget
                            Icon={BsBookmark}
                            title="Total Enrollements"
                            hint="Total number of enrollements"
                            className="h-40"
                        >
                            <p className="text-2xl font-semibold">1,232</p>
                        </Widget>
                    </>
                )}
            </div>
            <Widget
                Icon={BiNotification}
                title="Notifications"
                className="h-40"
            >
                <InputLabel
                    value="No notification yet"
                    className="ml-0 text-sm opacity-60"
                />
            </Widget>
        </div>
    );
}

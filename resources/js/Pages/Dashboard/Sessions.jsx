import { Head, Link, usePage } from "@inertiajs/react";
import DashboardLayout from "./Partials/Components/DashboardLayout";
import Table from "./Partials/Components/Table";
import { BiEdit, BiLink, BiTrash } from "react-icons/bi";
import { formatDate } from "@/utils/utils";
import DeleteModal from "../Profile/Forms/DeleteModal";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import DoneModal from "./Partials/Components/DoneModal";
import Badge from "@/Components/Badge";
import ListModal from "./Partials/Components/ListModal";
import ActivityCard from "./Partials/Components/ActivityCard";
import FeedbackModal from "./Partials/Components/FeedbackModal";
import { Rating } from "flowbite-react";
import Stars from "@/Components/Stars";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const sessions = usePage().props.sessions?.data;
    const enrollments = usePage().props.enrollments?.data || [];
    const findFeedback = (data, id) => {
        return data.filter((f) => f.userId === id);
    };
    return (
        <DashboardLayout>
            <Head title="Sessions" />
            <div className="flex flex-col gap-8">
                {sessions && (
                    <Table
                        title="Your Sessions"
                        subtitle="Session that you poster sorted by recently added."
                        columns={[
                            "Title",
                            "Scheduled Date",
                            "Places Limit",
                            "Students enrolled",
                            "status",
                            "Actions",
                        ]}
                    >
                        {sessions.map((s) => (
                            <tr className="bg-white dark:bg-dark" key={s.id}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <Link
                                        href={`/session/${s.id}`}
                                        className="flexible gap-2"
                                    >
                                        <BiLink />
                                        {s.title}
                                    </Link>
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {formatDate(s.scheduled_time)}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {s.placesLimit}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {s.enrollments.length}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    <Badge
                                        text={s.is_active ? "LIVE" : "DONE"}
                                        className={
                                            s.is_active
                                                ? "bg-green-500 text-white"
                                                : "bg-slate-500 text-white"
                                        }
                                    />
                                </th>
                                {/* Actions */}
                                <td className="px-6 py-4 flexible gap-3">
                                    {s.is_active == 1 && (
                                        <DoneModal
                                            routeDirect={`/session/${s.id}/done`}
                                        />
                                    )}
                                    {s.is_active == 1 && (
                                        <p>
                                            <BiEdit
                                                size={21}
                                                className="text-primary"
                                            />
                                        </p>
                                    )}
                                    <ListModal>
                                        <ActivityCard
                                            modal={1}
                                            session={s}
                                            more={1}
                                        />
                                    </ListModal>
                                    <DeleteModal
                                        routeDirect={`/session/${s.id}`}
                                    />
                                </td>
                            </tr>
                        ))}
                    </Table>
                )}
                {enrollments && (
                    <Table
                        title="Your Enrollments"
                        subtitle="Sessions that you're enrolled in."
                        columns={[
                            "Title",
                            "Note",
                            "scheduled Date",
                            "Enrollments",
                            "Feedback",
                        ]}
                    >
                        {enrollments.map((e) => (
                            <tr className="bg-white dark:bg-dark" key={e.id}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <Link
                                        href={`/session/${e.session.id}`}
                                        className="flexible gap-2"
                                    >
                                        <BiLink />
                                        {e.session.title}
                                    </Link>
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {e.note}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {formatDate(e.session.scheduled_time)}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {e.session.enrollments.length}
                                </th>
                                {/* Actions */}
                                <td className="px-6 py-4">
                                    {e.session.is_active == 1 ? (
                                        <p className="opacity-[0.5]">
                                            You can leave a feedback after the
                                            session is done.
                                        </p>
                                    ) : !findFeedback(
                                          e.session.feedbacks,
                                          e.user.id
                                      )[0] ? (
                                        <FeedbackModal
                                            routeDirect={`/session/${e.session.id}/feedback`}
                                        />
                                    ) : (
                                        <>
                                            <Stars
                                                rating={
                                                    findFeedback(
                                                        e.session.feedbacks,
                                                        e.user.id
                                                    )[0].rating
                                                }
                                            />
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </Table>
                )}
            </div>
        </DashboardLayout>
    );
}

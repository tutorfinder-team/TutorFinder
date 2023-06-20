import Avatar from "@/Components/Avatar";
import Avatars from "@/Components/Avatars";
import Badge from "@/Components/Badge";
import Card from "@/Components/Card";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Stars from "@/Components/Stars";
import { Link, useForm, usePage } from "@inertiajs/react";
import { BiCalendar, BiDollar, BiPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import SmallDetail from "./SmallDetail";
import { randColor, truncate } from "@/utils/utils";
import { FiMail } from "react-icons/fi";
import TextArea from "@/Components/TextArea";
import FeedbacksCard from "./FeedbacksCard";

const DetailsLayout = ({ session }) => {
    const isEnrolled = usePage().props.isEnrolled;
    const user = usePage().props.auth.user;
    const { data, setData, post, processing, reset } = useForm({
        note: "",
    });
    const feedbacks = session.feedbacks;
    const findFeedback = (data, id) => {
        return data.filter((f) => f.userId === id);
    };
    const enroll = (e) => {
        e.preventDefault();
        post(`/session-enroll/${session.id}`, {
            preserveScroll: true,
            onSuccess: () => {},
            onError: () => {},
            onFinish: () => reset(),
        });
    };
    return (
        <div
            className="p-5 mt-8 mr-5 flex flex-col lg:flex-row gap-5"
            key={session.id}
        >
            {/* Back button */}
            <div className="left-content">
                <div className="flex items-center gap-5">
                    <Avatar
                        name={session.user.fullname}
                        img={session.user.picture}
                        className="w-20 h-20 rounded-xl"
                    />
                    <div className="flex-1">
                        <span className="flexible gap-3">
                            <h3 className="opacity-[0.6] text-sm font-bold uppercase">
                                {session.user.username}
                            </h3>
                            <Stars rating={session.user.rating} />
                        </span>
                        <h1 className="text-xl font-semibold py-0.5">
                            {session.title}
                        </h1>
                        <Link href={`/profile/${session.user.username}`}>
                            <h1 className="font-semibold text-primary text-sm cursor-pointer">
                                View Profile
                            </h1>
                        </Link>
                    </div>
                </div>
                {/* More info about the user/teacher such as phone number and email address... */}
                <div className="mt-7">
                    <InputLabel
                        value="Session details"
                        className="font-semibold text-[1.05rem]"
                    />
                    <div className="mt-4 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
                        <SmallDetail
                            Icon={BiDollar}
                            h1="Discuss with the teacher"
                            h2="Price"
                        />
                        <SmallDetail
                            Icon={FiMail}
                            h1={`${truncate(session.user.email, 20)}`}
                            h2="Email"
                        />
                        <SmallDetail
                            Icon={BiPhone}
                            h1={`${session.user.phone_number}`}
                            h2="Phone Number"
                        />
                        <SmallDetail
                            Icon={HiLocationMarker}
                            h1={`${session.location}`}
                            h2="Location"
                        />
                        <SmallDetail
                            Icon={BiCalendar}
                            h1={`${session.scheduled_time}`}
                            h2="Scheduled Time"
                        />
                        <SmallDetail
                            Icon={MdPeople}
                            h1={
                                "Limited to " +
                                session.placesLimit +
                                ` place${session.placesLimit > 1 ? "s" : ""}`
                            }
                            h2="Places"
                        />
                    </div>
                </div>
                {/* Skills */}
                <div className="mt-7">
                    <InputLabel
                        value="Skills that you'll learn"
                        className="font-semibold text-[1.05rem]"
                    />
                    <div className="my-4 tags">
                        {JSON.parse(session.tags).skills.map((skill) => {
                            return (
                                <Link key={skill} href={`/?search=${skill}`}>
                                    <Badge
                                        text={skill}
                                        className={`px-3`}
                                        style={{ backgroundColor: randColor() }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                {/* description */}
                <div className="mt-7">
                    <InputLabel
                        value="Description"
                        className="font-semibold text-[1.05rem]"
                    />
                    <Card className="p-4 my-4 description">
                        <p className="font-medium text-sm leading-relaxed">
                            {session.description}...
                        </p>
                    </Card>
                </div>
                {/* feedbakcs */}
                <div className="mt-7">
                    <InputLabel
                        value="Feedbacks"
                        className="font-semibold text-[1.05rem]"
                    />
                    <FeedbacksCard
                        feedbacks={session.feedbacks}
                        className="my-4"
                    />
                </div>
            </div>
            <div className="right-content">
                {/* Enrollements */}
                <div className="">
                    <span className="flex flex-col">
                        <InputLabel
                            value="Students who are enrolled in this session"
                            className="ml-0 font-semibold "
                        />
                        <div className="w-20 mt-2 rounded-lg h-[2px] bg-primary"></div>
                    </span>
                    <div className="subscribers mt-5 flexible-center gap-2">
                        <h4 className="text-sm font-semibold leading-relaxed ">
                            {session.enrollments.length == 0 &&
                                "No one enrolled"}{" "}
                        </h4>
                        <div className="flex -space-x-2">
                            <Avatars users={session.enrollments} />
                        </div>
                    </div>
                </div>
                {user.id === session.user.id ? (
                    <div className="mt-8">
                        <span className="flex flex-col">
                            <InputLabel
                                value="You own this session"
                                className="ml-0 font-semibold "
                            />
                            <div className="w-20 mt-2 rounded-lg h-[2px] bg-primary"></div>
                        </span>
                        <Link
                            href="/dashboard/sessions"
                            className="mt-5 flexible-center"
                        >
                            <PrimaryButton>View in dashboard</PrimaryButton>
                        </Link>
                    </div>
                ) : !session.is_active && !isEnrolled ? (
                    <div className="mt-8">
                        <span className="flex flex-col">
                            <InputLabel
                                value="This session is done, you can't enroll in it"
                                className="ml-0 font-semibold "
                            />
                            <div className="w-20 mt-2 rounded-lg h-[2px] bg-primary"></div>
                        </span>
                    </div>
                ) : !isEnrolled ? (
                    <div className="mt-8">
                        <span className="flex flex-col">
                            <InputLabel
                                value="Enroll in this session"
                                className="ml-0 font-semibold "
                            />
                            <div className="w-20 mt-2 rounded-lg h-[2px] bg-primary"></div>
                        </span>
                        <div className="mt-4">
                            <InputLabel
                                value="Note"
                                className="ml-0 font-bold"
                            />
                            <InputLabel
                                value="Write anything you would like to inform or ask the tutor about, after you enroll."
                                className="ml-0 text-sm opacity-60"
                            />
                            <form onSubmit={enroll}>
                                <TextArea
                                    className="mt-3 text-sm"
                                    placeholder="Write your note here..."
                                    name="note"
                                    onChange={(e) =>
                                        setData("note", e.target.value)
                                    }
                                >
                                    {data.note}
                                </TextArea>
                                <div className="flexible justify-end mt-2">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing || isEnrolled}
                                    >
                                        {isEnrolled ? "Enrolled" : "Enroll"}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="mt-8">
                        <span className="flex flex-col">
                            <InputLabel
                                value="You're enrolled in this session"
                                className="ml-0 font-semibold "
                            />
                            <div className="w-20 mt-2 rounded-lg h-[2px] bg-primary"></div>
                        </span>
                        <Link
                            href="/dashboard/sessions"
                            className="mt-5 flexible-center"
                        >
                            <PrimaryButton>
                                {session.user.username !== user.username &&
                                findFeedback(feedbacks, user.id).length === 0 &&
                                !session.is_active
                                    ? "Give feedback"
                                    : "View in dashboard"}
                            </PrimaryButton>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailsLayout;

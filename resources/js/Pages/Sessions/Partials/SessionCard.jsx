import Avatar from "@/Components/Avatar";
import Avatars from "@/Components/Avatars";
import Badge from "@/Components/Badge";
import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import Stars from "@/Components/Stars";
import { BiTime } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdPeople } from "react-icons/md";

const randColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const colorWithOpacity = randomColor + "40";

    return colorWithOpacity;
};

const SessionCard = ({ session }) => {
    return (
        <Card className="p-5" key={session.id}>
            <div className="flex items-center gap-5">
                <Avatar
                    name={session.user.name}
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
                    <div className="badges flexible my-2">
                        <Badge
                            icon={BiTime}
                            text={session.scheduled_time}
                            className="bg-primary/30"
                        />
                        <Badge
                            icon={HiLocationMarker}
                            size={14}
                            text="Online"
                        />
                        <Badge
                            icon={MdPeople}
                            size={16}
                            text={
                                "Limited to " + session.placesLimit + " places"
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 my-4 description">
                <p className="opacity-[0.8] font-medium text-sm leading-relaxed">
                    {session.description}...
                </p>
            </div>
            <div className="px-4 my-4 tags">
                {JSON.parse(session.tags).skills.map((skill) => {
                    return (
                        <Badge
                            text={skill}
                            className={`px-3`}
                            style={{ backgroundColor: randColor() }}
                        />
                    );
                })}
            </div>
            <div className="px-4 mt-8 footer flexible justify-between">
                <div className="subscribers flexible gap-2">
                    <h4 className="text-sm font-semibold leading-relaxed">
                        {session.enrollments.length >= 1
                            ? "People enrolled :"
                            : "No one enrolled"}{" "}
                    </h4>
                    <div className="flex -space-x-2.5">
                        <Avatars users={session.enrollments} />
                    </div>
                </div>
                <PrimaryButton className="text-sm">Enroll now</PrimaryButton>
            </div>
        </Card>
    );
};

export default SessionCard;

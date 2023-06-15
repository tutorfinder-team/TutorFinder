import Avatar from "@/Components/Avatar";
import Avatars from "@/Components/Avatars";
import Badge from "@/Components/Badge";
import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Stars from "@/Components/Stars";
import { Link } from "@inertiajs/react";
import { BiTime } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdPeople } from "react-icons/md";

const randColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const colorWithOpacity = randomColor + "40";

    return colorWithOpacity;
};

const DetailsLayout = ({ session }) => {
    return (
        <div className="p-5 mt-12" key={session.id}>
            {/* Back button */}
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
                    <h1 className="font-semibold text-primary text-sm cursor-pointer">
                        View Profile
                    </h1>
                </div>
            </div>
            {/* More info about the user/teacher such as phone number and email address... */}
            {/* Skills */}
            <div className="px-2 my-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-black text-m  px-8 mt-8 "> Skills and expertises</h1>
                <div className="px-4 my-4 tags">
                    
                    {JSON.parse(session.tags).skills.map((skill) => {
                        return (
                            <Link href={`/?search=${skill}`}>
                                <Badge
                                key={skill}
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
            <div className="px-2 my-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-black text-m bg-transparent px-8 mt-8 "> Description</h1>

                <Card className="p-4 my-4 description">
                    <p className="opacity-[0.8] font-medium text-sm leading-relaxed">
                        {session.description}...
                    </p>
                </Card>
            </div>
        
            {/* Enrollements */}
            <div className="px-4 mt-8 footer flexible justify-between">
                <div className="subscribers flexible gap-2">
                    <h4 className="text-sm font-semibold leading-relaxed">
                        {session.enrollments.length >= 1
                            ? <div className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-black text-m  px-8 ">People Enrolled </div>
                            : "No one enrolled"}{" "}
                    </h4>
                    <div className="flex -space-x-2.5">
                        <Avatars users={session.enrollments} />
                    </div>
                </div>
            </div>

            {/* Responsibilities : */}
                  {/* description */}
            <div className="px-2 my-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-black text-m  px-8 mt-8 "> Responsibilities</h1>
                <ul class="max-w-md space-y-1 text-white-500 list-disc list-inside mt-4 ml-8">
                    <li>
                        Responsibility number 1
                    </li>
                    <li>
                        Maintaining number 2
                    </li>
                    <li>
                        Staff augmentation
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DetailsLayout;

import Avatar from "@/Components/Avatar";
import Badge from "@/Components/Badge";
import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import Stars from "@/Components/Stars";
import { BiDollar, BiLocationPlus, BiTime } from "react-icons/bi";

const SessionCard = ({ session }) => {
    const dummy = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quis sit a et ab corporis ad labore ipsam esse
    reprehenderit. Ipsum quos inventore repudiandae possimus,
    maxime corporis quidem earum, perferendis natus, temporibus
    libero? Quidem illo fugiat at corrupti doloribus veritatis
    deleniti. Nemo excepturi quidem ex nostrum animi veritatis
    sapiente cum fugit!`;

    return (
        <Card className="p-5">
            <div className="flex items-center gap-5">
                <Avatar
                    name={session.tutor}
                    className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                    <span className="flexible gap-3">
                        <h3 className="opacity-[0.6] text-sm font-bold uppercase">{session.tutor}</h3>
                        <Stars rating={4.7}/>
                    </span>
                    <h1 className="text-xl font-semibold py-2">{session.title}</h1>
                    <div className="badges my-2">
                        <Badge
                            icon={BiTime}
                            text="2023-04-12"
                            className="bg-primary/30"
                        />
                        <Badge icon={BiDollar} text="Discuss later" />
                        <Badge icon={BiLocationPlus} text="Online" />
                    </div>
                </div>
            </div>
            <div className="px-4 my-4 description">
                <p className="opacity-[0.8] font-medium text-sm leading-relaxed">
                    {dummy.slice(0, 200)}...
                </p>
            </div>
            <div className="px-4 my-4 tags">
                <Badge text="javascript" className="bg-yellow-300/30 px-3" />
                <Badge text="react" className="bg-blue-400/30 px-3" />
                <Badge text="html" className="bg-red-400/30 px-3" />
            </div>
            <div className="px-4 mt-8 footer flexible justify-between">
                <div className="subscribers flexible gap-2">
                    <h4 className="text-sm font-semibold leading-relaxed">
                        Subscribers:{" "}
                    </h4>
                    <div className="flex -space-x-4">
                        <img
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                        />

                        <img
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                        />

                        <img
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                        />

                        <a
                            className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                            href="#"
                        >
                            +2
                        </a>
                    </div>
                </div>
                <PrimaryButton>Subscribe now</PrimaryButton>
            </div>
        </Card>
    );
};

export default SessionCard;

import { BiEdit, BiTrash, BiTrophy } from "react-icons/bi";
import CardLayout from "./CardLayout";
import FormAddExperience from "../Forms/Experience/FormAddExperience";
import dateFormat, { masks } from "dateformat";
import { formatDate, toCapital } from "@/utils/utils";
import DeleteModal from "../Forms/DeleteModal";
import { usePage } from "@inertiajs/react";

function Experience({ data }) {
    const {canEdit} = usePage().props;
    return (
        <CardLayout
            cardName="Experience"
            Icon={BiTrophy}
            FormModal={canEdit && FormAddExperience}
        >
            {data.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {data.map((experience) => (
                        <div
                            key={experience.id}
                            className="flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg"
                        >
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {toCapital(experience.position)}
                                </h1>
                                <h2 className="text-sm">
                                    At{" "}
                                    <span className="font-semibold">
                                        {toCapital(experience.company)}
                                    </span>
                                </h2>
                                <h2 className="text-sm">
                                {formatDate(experience.start_date)} -{" "}
                                    {formatDate(experience.end_date) ||
                                        "Present"}
                                </h2>
                            </div>
                            {canEdit &&
                            <div className="buttons flex gap-2">
                                <DeleteModal
                                    routeDirect={`/profile/experience/${experience.id}`}
                                />
                                <BiEdit
                                    className="text-primary duration-100 cursor-pointer"
                                    size={21}
                                />
                            </div>}
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="opacity-[0.5]"> No experience added.</h1>
            )}
        </CardLayout>
    );
}

export default Experience;

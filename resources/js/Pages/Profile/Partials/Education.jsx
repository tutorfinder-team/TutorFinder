import { BiEdit, BiTrash, BiBook } from "react-icons/bi";
import CardLayout from "./CardLayout";
import FormAddEducation from "../Forms/Education/FormAddEducation";
import { formatDate, toCapital } from "@/utils/utils";

function Education({ data }) {
    return (
        <CardLayout
            cardName="Education"
            Icon={BiBook}
            FormModal={FormAddEducation}
        >
            {data.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {data.map((education) => (
                        <div
                            key={education.id}
                            className="flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg"
                        >
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {toCapital(education.degree)}
                                </h1>
                                <h2 className="text-sm">
                                    In{" "}
                                    <span className="font-semibold">
                                        {toCapital(education.field_of_study)}
                                    </span>{" "}
                                </h2>
                                <h2 className="text-sm">
                                    At <span className="font-semibold">
                                    {toCapital(education.institution)}</span>
                                </h2>
                                <h2 className="text-sm">
                                {formatDate(education.start_year)} -{" "}
                                    {formatDate(education.end_year) || "Present"}
                                </h2>
                            </div>
                            <div className="buttons flex gap-2">
                                <BiTrash
                                    className="text-red-500 duration-100 cursor-pointer"
                                    size={21}
                                />
                                <BiEdit
                                    className="text-primary duration-100 cursor-pointer"
                                    size={21}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="opacity-[0.5]"> No education added yet.</h1>
            )}
        </CardLayout>
    );
}

export default Education;

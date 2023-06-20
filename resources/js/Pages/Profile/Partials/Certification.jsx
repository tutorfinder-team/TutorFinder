import { TbCertificate } from "react-icons/all";
import CardLayout from "./CardLayout";
import { BiEdit, BiTrash } from "react-icons/bi";
import FormAddCertification from "../Forms/Certification/FormAddCertification";
import { formatDate, toCapital } from "@/utils/utils";
import DeleteModal from "../Forms/DeleteModal";
import { usePage } from "@inertiajs/react";

function Certification({ data }) {
    const {canEdit} = usePage().props;
    return (
        <CardLayout
            cardName="Certification"
            Icon={TbCertificate}
            FormModal={canEdit && FormAddCertification}
        >
            {data.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {data.map((certification) => (
                        <div
                            key={certification.id}
                            className="flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg"
                        >
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {toCapital(certification.name)}
                                </h1>
                                <h2 className="text-sm">
                                    Issued by{" "}
                                    <span className="font-semibold">
                                        {toCapital(
                                            certification.issuing_organization
                                        )}
                                    </span>
                                </h2>
                                <h2 className="text-sm">
                                    {formatDate(certification.issue_date)} -{" "}
                                    {certification.expiration_date
                                        ? formatDate(
                                            certification.expiration_date
                                        )
                                        : "No Expiration"}
                                </h2>
                                {certification.link && (
                                    <a
                                        href={certification.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary underline"
                                    >
                                        View Certification
                                    </a>
                                )}
                            </div>
                            {canEdit &&
                            <div className="buttons flex gap-2">
                                <DeleteModal
                                    routeDirect={`/profile/certification/${certification.id}`}
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
                <h1 className="opacity-[0.5]">
                    {" "}
                    No certification uploaded.
                </h1>
            )}
        </CardLayout>
    );
}

export default Certification;

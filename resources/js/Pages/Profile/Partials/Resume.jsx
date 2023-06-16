import { useRef, useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import CardLayout from "./CardLayout";
import FormAddResume from "../Forms/Resume/FormAddResume";
import { Document, Page } from "react-pdf";
import { Link, usePage } from "@inertiajs/react";
import DeleteModal from "../Forms/DeleteModal";

function Resume({ data, percentage}) {
    const {canEdit} = usePage().props;
    return (
        <CardLayout
            cardName="Resume"
            Icon={FiFilePlus}
            cardProps={!data && {percentage, percentageToAdd: 25}}
            FormModal={canEdit && FormAddResume}
        >
            <>
                {data ? (
                    <div className="flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg">
                        <a href={data} target="_BLANK">
                            <h1 className="text font-semibold duration-100 hover:text-primary">
                                Click to view resume
                            </h1>
                        </a>
                        {canEdit &&
                        <div className="buttons flex gap-2">
                            <DeleteModal routeDelete="resume.delete" />
                        </div>}
                    </div>
                ) : (
                    <h1 className="opacity-[0.5]">No resume uploaded.</h1>
                )}
            </>
        </CardLayout>
    );
}
export default Resume;

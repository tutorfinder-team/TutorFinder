import { FiFilePlus } from "react-icons/fi";
import CardLayout from "./CardLayout";

function Resume() {
    return (
        <CardLayout cardName="Resume" Icon={FiFilePlus} isFile>
            <h1 className="opacity-[0.5]"> No resume uploaded yet.</h1>
        </CardLayout>
    );
}

export default Resume;

import { useRef, useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import CardLayout from "./CardLayout";
import SecondaryButton from "@/Components/SecondaryButton";
import { BiPlus } from "react-icons/bi";
import TextInput from "@/Components/TextInput";

function FormResume() {
    const inputRef = useRef();
    return (
        <>
            <SecondaryButton
                className="py-3"
                onClick={() => inputRef.current.click()}
            >
                <BiPlus size={21} />
            </SecondaryButton>
            <TextInput
                type="file"
                id="name"
                name="resume"
                ref={inputRef}
                className="hidden"
            />
        </>
    );
}

function Resume() {
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const handleUpload = () => {
        // Logic to handle the upload here
        // Once the upload is successful, set the resumeUploaded state to true
        setResumeUploaded(true);
    };
    return (
        <CardLayout
            cardName="Resume"
            Icon={FiFilePlus}
            FormModal={FormResume}
            onClick={handleUpload}
        >
            {resumeUploaded ? (
                <h1>Resume uploaded successfully!</h1>
            ) : (
                <>
                    <h1 className="opacity-[0.5]">No resume uploaded yet.</h1>
                </>
            )}
        </CardLayout>
    );
}
export default Resume;

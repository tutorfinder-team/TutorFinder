// import { FiFilePlus } from "react-icons/fi";
// import CardLayout from "./CardLayout";

// function Resume() {
//     return (
//         <CardLayout cardName="Resume" Icon={FiFilePlus} isFile>
//             <h1 className="opacity-[0.5]"> No resume uploaded yet.</h1>
//         </CardLayout>
//     );
// }

// export default Resume;
import { useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import CardLayout from "./CardLayout";

function Resume() {
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const handleUpload = () => {
        // Logic to handle the upload here
        // Once the upload is successful, set the resumeUploaded state to true
        setResumeUploaded(true);
    };
    return (
        <CardLayout cardName="Resume" Icon={FiFilePlus} isFile onClick={handleUpload}>
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





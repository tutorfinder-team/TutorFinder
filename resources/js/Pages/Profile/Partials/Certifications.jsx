import { TbCertificate } from "react-icons/all";
import CardLayout from "./CardLayout";


function Certifications() {
    return (
        <CardLayout cardName="Certifications" Icon={TbCertificate} isFile>
            <h1 className="opacity-[0.5]"> No Certifications uploaded yet.</h1>
        </CardLayout>
    );
}

export default Certifications;

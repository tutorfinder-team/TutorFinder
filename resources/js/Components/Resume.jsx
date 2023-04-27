import React from "react";
import Card from "@/Components/Card";
import SecondaryButton from "@/Components/SecondaryButton";
import { FiFile, FiFilePlus } from "react-icons/fi";
import TextInput from "@/Components/TextInput";
import { BiPlus, BiTrophy } from "react-icons/bi";



function Resume({auth : {user} }) {
    const inputRef = useRef();
    return (
        <div>
        <Card className="p-0">
            <div className="header flexible justify-between py-3 px-5 border-b border-apply">
                <div className="flexible gap-2">
                    <FiFilePlus />
                    <h1>Resume</h1>
                </div>
                <div>
                    <SecondaryButton
                        className="py-3"
                        onClick={() => inputRef.current.click()}
                    >
                        <BiPlus size={21} />
                    </SecondaryButton>
                    <TextInput type="file" ref={inputRef} className="hidden" />
                </div>
            </div>
            <div className="content py-3 px-12 ">
                <h1> No resume uploaded yet.</h1>
            </div>
        </Card>
        </div>
    );
}

export default Resume;

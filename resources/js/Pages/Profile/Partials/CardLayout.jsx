import Card from "@/Components/Card";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import React, { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { FiFilePlus } from "react-icons/fi";

export default function CardLayout({cardName, Icon, children, isFile}) {
    const inputRef = useRef();
    return (
        <Card className="p-0">
            <div className="header flexible justify-between py-3 px-5 border-b border-apply">
                <div className="flexible gap-2">
                    <Icon />
                    <h1>{cardName}</h1>
                </div>
                <div>
                    <SecondaryButton
                        className="py-3"
                        onClick={() => isFile && inputRef.current.click()}
                    >
                        <BiPlus size={21} />
                    </SecondaryButton>
                    {isFile && <TextInput type="file" id="name" name="resume" ref={inputRef} className="hidden" />}
                </div>
            </div>
            <div className="content py-3 px-5">
                {children}
            </div>
        </Card>
    );
}

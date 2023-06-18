import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { BiTrash } from "react-icons/bi";
import PrimaryButton from "@/Components/PrimaryButton";
import { BsPeopleFill } from "react-icons/bs";

export default function ListModal({
    children,
    className = "",
}) {
    const [confirmingDone, setConfirmingDone] = useState(false);

    const confirmUserDone = () => {
        setConfirmingDone(true);
    };


    const closeModal = () => {
        setConfirmingDone(false);
    };

    return (
        <>
            <button onClick={confirmUserDone} className="font-medium">
                 <BsPeopleFill size={21} className="" />
            </button>
            <Modal show={confirmingDone} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Students in this session
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        List of students in this session. <br />
                        Click in the student name to see more details.
                    </p>

                    <div className="text-darker dark:text-gray-100">
                        {children}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Close
                        </SecondaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}

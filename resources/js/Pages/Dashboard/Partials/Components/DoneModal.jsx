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

export default function DoneModal({
    routeDelete,
    routeDirect,
    className = "",
}) {
    const [confirmingDone, setConfirmingDone] = useState(false);
    const {
        data,
        setData,
        patch,
        processing,
        reset,
        errors,
    } = useForm({
    });

    const confirmUserDone = () => {
        setConfirmingDone(true);
    };

    const doneItem = (e) => {
        e.preventDefault();

        if (routeDelete || routeDirect) {
            patch(routeDelete ? route(routeDelete) : routeDirect, {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => {},
                onFinish: () => reset(),
            });
        } else {
            closeModal();
        }
    };

    const closeModal = () => {
        setConfirmingDone(false);
        reset();
    };

    return (
        <>
            <button onClick={confirmUserDone} className="text-yellow-400 font-medium">
                Mark as done
            </button>
            <Modal show={confirmingDone} onClose={closeModal}>
                <form onSubmit={doneItem} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Is this session done?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once the session is set to done, it won't show up in the feed anymore.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton className="ml-3" disabled={processing}>
                           Mark as done
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { BiTrash } from "react-icons/bi";

export default function DeleteModal({
    routeDelete,
    routeDirect,
    className = "",
}) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingDeletion(true);
    };

    const deleteItem = (e) => {
        e.preventDefault();

        if (routeDelete || routeDirect) {
            destroy(routeDelete ? route(routeDelete) : routeDirect, {
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
        setConfirmingDeletion(false);
        reset();
    };

    return (
        <>
            <button onClick={confirmUserDeletion}>
                <BiTrash
                    className="text-red-500 duration-100 cursor-pointer"
                    size={21}
                />
            </button>
            <Modal show={confirmingDeletion} onClose={closeModal}>
                <form onSubmit={deleteItem} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Are you sure you want to delete this item?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once the item is deleted, all of its associated data
                        will be permanently deleted. Please enter your password
                        to confirm you would like to permanently delete this
                        item.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Delete Item
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

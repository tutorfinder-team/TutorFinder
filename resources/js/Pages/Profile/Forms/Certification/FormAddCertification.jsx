import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus } from "react-icons/bi";

export default function FormAddCertification() {
    const [addingCertification, setAddingCertification] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        issuing_organization: "",
        issue_date: "",
        expiration_date: "",
        link: "",
    });

    const openAddCertification = () => {
        setAddingCertification(true);
    };
    const closeModal = () => {
        setAddingCertification(false);
        reset();
    };

    const addCertification = (e) => {
        e.preventDefault();

        post(route("certification.add"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => reset(),
        });
    };

    return (
        <>
            <SecondaryButton className="py-3" onClick={openAddCertification}>
                <BiPlus size={21} />
            </SecondaryButton>

            <Modal show={addingCertification} onClose={closeModal}>
                <form onSubmit={addCertification} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Add Your Certification
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        By adding your certification, you can showcase your
                        qualifications to others.
                    </p>

                    <div className="flex justify-between mt-4">
                        <div className="w-1/2 pr-3">
                            {/* Name Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="name"
                                value="Name"
                            />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Certification Name"
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />

                            {/* Issuing Organization Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="issuing_organization"
                                value="Issuing Organization"
                            />
                            <TextInput
                                id="issuing_organization"
                                type="text"
                                name="issuing_organization"
                                value={data.issuing_organization}
                                onChange={(e) =>
                                    setData(
                                        "issuing_organization",
                                        e.target.value
                                    )
                                }
                                className="mt-1 block w-full"
                                placeholder="Issuing Organization"
                            />
                            <InputError
                                message={errors.issuing_organization}
                                className="mt-2"
                            />

                            {/* Issue Date Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="issue_date"
                                value="Issue Date"
                            />
                            <TextInput
                                id="issue_date"
                                type="date"
                                name="issue_date"
                                value={data.issue_date}
                                onChange={(e) =>
                                    setData("issue_date", e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            <InputError
                                message={errors.issue_date}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-1/2 pr-3">
                            {/* Expiration Date Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="expiration_date"
                                value="Expiration Date"
                            />
                            <TextInput
                                id="expiration_date"
                                type="date"
                                name="expiration_date"
                                value={data.expiration_date}
                                onChange={(e) =>
                                    setData("expiration_date", e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            <InputError
                                message={errors.expiration_date}
                                className="mt-2"
                            />

                            {/* Link Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="link"
                                value="Link"
                            />
                            <TextInput
                                id="link"
                                type="url"
                                name="link"
                                value={data.link}
                                onChange={(e) =>
                                    setData("link", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Link (optional)"
                            />
                            <InputError
                                message={errors.link}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton className="ml-3" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus } from "react-icons/bi";
import { useForm } from "@inertiajs/react";

export default function FormAddExperience() {
    const [addingExperience, setAddingExperience] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        position: "",
        company: "",
        start_date: "",
        end_date: "",
        description: "",
    });

    const openAddExperience = () => {
        setAddingExperience(true);
    };
    const closeModal = () => {
        setAddingExperience(false);

        reset();
    };

    const addExperience = (e) => {
        e.preventDefault();

        post(route("experience.add"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => reset(),
        });
    };
    return (
        <>
            <SecondaryButton className="py-3" onClick={openAddExperience}>
                <BiPlus size={21} />
            </SecondaryButton>

            <Modal show={addingExperience} onClose={closeModal}>
                <form onSubmit={addExperience} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Add Your Experience
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        By adding your experience you can show your skills to
                        others.
                    </p>

                    <div className="flex justify-between mt-4">
                        <div className="w-1/2 pr-3">
                            {/* Position Input */}
                            <InputLabel className="mt-3" htmlFor="position" value="Position" />
                            <TextInput
                                id="position"
                                type="text"
                                name="position"
                                value={data.position}
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Position"
                            />
                            <InputError
                                message={errors.position}
                                className="mt-2"
                            />

                            {/* Company Input */}
                            <InputLabel className="mt-3" htmlFor="company" value="Company" />
                            <TextInput
                                id="company"
                                type="text"
                                name="company"
                                value={data.company}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Company"
                            />
                            <InputError
                                message={errors.company}
                                className="mt-2"
                            />

                            {/* Description Input */}
                            <InputLabel className="mt-3"
                                htmlFor="description"
                                value="Description"
                            />
                            <TextInput
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Description"
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-1/2 pr-3">
                            {/* Start Date Input */}
                            <InputLabel className="mt-3"
                                htmlFor="start_date"
                                value="Start Date"
                            />
                            <TextInput
                                id="start_date"
                                type="date"
                                name="start_date"
                                value={data.start_date}
                                onChange={(e) =>
                                    setData("start_date", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                            />
                            <InputError
                                message={errors.start_date}
                                className="mt-2"
                            />

                            {/* End Date Input */}
                            <InputLabel className="mt-3" htmlFor="end_date" value="End Date" />
                            <TextInput
                                id="end_date"
                                type="date"
                                name="end_date"
                                value={data.end_date}
                                onChange={(e) =>
                                    setData("end_date", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                            />
                            <InputError
                                message={errors.end_date}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <PrimaryButton className="ml-3" disabled={processing}>Submit</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

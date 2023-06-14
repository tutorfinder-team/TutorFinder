import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus } from "react-icons/bi";
import { useForm } from "@inertiajs/react";

export default function FormAddEducation() {
    const [addingEducation, setAddingEducation] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        institution: "",
        degree: "",
        field_of_study: "",
        start_year: "",
        end_year: "",
    });

    const openAddEducation = () => {
        setAddingEducation(true);
    };
    const closeModal = () => {
        setAddingEducation(false);

        reset();
    };

    const addEducation = (e) => {
        e.preventDefault();

        post(route("education.add"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => reset(),
        });
    };
    return (
        <>
            <SecondaryButton className="py-3" onClick={openAddEducation}>
                <BiPlus size={21} />
            </SecondaryButton>

            <Modal show={addingEducation} onClose={closeModal}>
                <form onSubmit={addEducation} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Add Your Education
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        By adding your education, you can showcase your
                        qualifications to others.
                    </p>

                    <div className="flex justify-between mt-4">
                        <div className="w-1/2 pr-3">
                            {/* Institution Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="institution"
                                value="Institution"
                            />
                            <TextInput
                                id="institution"
                                type="text"
                                name="institution"
                                value={data.institution}
                                onChange={(e) =>
                                    setData("institution", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Institution"
                            />
                            <InputError
                                message={errors.institution}
                                className="mt-2"
                            />

                            {/* Degree Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="degree"
                                value="Degree"
                            />
                            <TextInput
                                id="degree"
                                type="text"
                                name="degree"
                                value={data.degree}
                                onChange={(e) =>
                                    setData("degree", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Degree"
                            />
                            <InputError
                                message={errors.degree}
                                className="mt-2"
                            />

                            {/* Field of Study Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="field_of_study"
                                value="Field of Study"
                            />
                            <TextInput
                                id="field_of_study"
                                type="text"
                                name="field_of_study"
                                value={data.field_of_study}
                                onChange={(e) =>
                                    setData("field_of_study", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Field of Study"
                            />
                            <InputError
                                message={errors.field_of_study}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-1/2 pr-3">
                            {/* Start Year Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="start_year"
                                value="Start Year"
                            />
                            <TextInput
                                id="start_year"
                                type="date"
                                name="start_year"
                                value={data.start_year}
                                onChange={(e) =>
                                    setData("start_year", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                            />
                            <InputError
                                message={errors.start_year}
                                className="mt-2"
                            />

                            {/* End Year Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="end_year"
                                value="End Year"
                            />
                            <TextInput
                                id="end_year"
                                type="date"
                                name="end_year"
                                value={data.end_year}
                                onChange={(e) =>
                                    setData("end_year", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                            />
                            <InputError
                                message={errors.end_year}
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

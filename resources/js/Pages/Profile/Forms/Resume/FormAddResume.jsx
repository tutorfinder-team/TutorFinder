import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus } from "react-icons/bi";
import { useForm, usePage } from "@inertiajs/react";
import { TbReplace } from "react-icons/tb";
import { VscReplace } from "react-icons/vsc";

export default function FormAddResume() {
    const { resume } = usePage().props;
    const [addingResume, setAddingResume] = useState(false);
    const { data, setData, post, progress, errors, reset, processing } =
        useForm({
            resume: "",
        });

    const openAddResume = () => {
        setAddingResume(true);
    };
    const closeModal = () => {
        setAddingResume(false);

        reset();
    };

    const addResume = (e) => {
        e.preventDefault();

        post(route("resume.add"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => {
                reset();
            },
        });
    };
    return (
        <>
            <SecondaryButton className="py-3" onClick={openAddResume}>
                {resume ? <TbReplace size={21} /> : <BiPlus size={21} />}
            </SecondaryButton>

            <Modal show={addingResume} onClose={closeModal}>
                <form
                    onSubmit={addResume}
                    encType="multipart/form-data"
                    className="p-6"
                >
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Add Your Resume
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        By adding your resume you can get more trust from
                        others.
                    </p>

                    <div className="flex mt-4 flex-col">
                        {/* Position Input */}
                        <InputLabel
                            className="mt-3"
                            htmlFor="resume"
                            value="Upload Your Resume"
                        />
                        <TextInput
                            id="resume"
                            type="file"
                            accept="application/pdf"
                            name="resume"
                            onChange={(e) => {
                                setData("resume", e.target.files[0]);
                            }}
                            className="mt-1 block w-3/4"
                            placeholder="Resume"
                        />
                        <InputError message={errors.resume} className="mt-2" />
                        {progress && (
                            <progress
                                value={progress.percentage}
                                className="mt-2 rounded-lg text-primary"
                                max="100"
                            >
                                {progress.percentage}%
                            </progress>
                        )}
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

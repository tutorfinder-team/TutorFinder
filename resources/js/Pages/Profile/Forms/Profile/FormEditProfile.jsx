import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { useEffect, useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiEdit, BiPlus } from "react-icons/bi";
import { useForm, usePage } from "@inertiajs/react";

export default function FormEditProfile() {
    const user = usePage().props.auth.user;
    const [editingProfile, setEditingProfile] = useState(false);
    const { data, setData, put, processing, reset, errors } = useForm({
        name: "",
        phone_number: "",
        birthdate: "",
        address: "",
        skills: "",
    });

    useEffect(() => {
        if (user) {
            setData({
                name: user.name,
                phone_number: user.phone_number,
                birthdate: user.birthdate,
                address: user.address,
                skills: user.skills,
            });
        }
    }, [user]);

    const openEditProfile = () => {
        setEditingProfile(true);
    };
    const closeModal = () => {
        setEditingProfile(false);

        reset();
    };

    const editProfile = (e) => {
        e.preventDefault();
        put(route("profile.edit.info"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => reset(),
        });
    };
    return (
        <>
            <SecondaryButton className="py-3" onClick={openEditProfile}>
                <BiEdit size={21} />
            </SecondaryButton>

            <Modal show={editingProfile} onClose={closeModal}>
                <form
                    onSubmit={editProfile}
                    className="p-6"
                    encType="multipart/form-data"
                >
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Edit Your Profile
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        By editing your profile you can complete your profile.{" "}
                        <br />
                        And make sure your profile information are valid and up
                        to date.
                    </p>

                    <div className="flex justify-between mt-4">
                        <div className="w-1/2 pr-3">
                            {/* Name Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="name"
                                value="Name *"
                            />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Name"
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />

                            {/* Phone Number Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="phone_number"
                                value="Phone Number *"
                            />
                            <TextInput
                                id="phone_number"
                                type="text"
                                name="phone_number"
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Phone Number"
                            />
                            <InputError
                                message={errors.phone_number}
                                className="mt-2"
                            />

                            {/* Address Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="address"
                                value="Address"
                            />
                            <TextInput
                                id="address"
                                type="text"
                                name="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Address"
                            />
                            <InputError
                                message={errors.address}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-1/2 pr-3">
                            {/* Birthdate Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="birthdate"
                                value="Birthdate *"
                            />
                            <TextInput
                                id="birthdate"
                                type="date"
                                name="birthdate"
                                value={data.birthdate && data.birthdate.split("T")[0]}
                                onChange={(e) =>
                                    setData("birthdate", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Birthdate"
                            />
                            <InputError
                                message={errors.birthdate}
                                className="mt-2"
                            />
                            {/* Skills Input */}
                            <InputLabel
                                className="mt-3"
                                htmlFor="skills"
                                value="Skills"
                            />
                            <TextInput
                                id="skills"
                                type="text"
                                name="skills"
                                value={data.skills}
                                onChange={(e) =>
                                    setData("skills", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Skill1, skill2..."
                            />
                            <InputError
                                message={errors.skills}
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

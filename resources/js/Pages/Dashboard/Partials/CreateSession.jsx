import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "./Components/DashboardLayout";
import Card from "@/Components/Card";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import { useRef, useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { BiPlus } from "react-icons/bi";
import { useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";
import Radio from "@/Components/Radio";

export default function CreateSession() {
    const [locationType, setLocationType] = useState("Online");
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        scheduled_time: "",
        description: "",
        skills_taught: "",
        location: "Online",
        places_limit: "",
    });

    function setType(selected) {
        setLocationType(selected.name);
        if (selected.name === "Online") setData("location", "Online");
        else setData("location", "");
    }

    const createSession = (e) => {
        e.preventDefault();
        post(route("session.store"), {
            preserveScroll: true,
            onSuccess: () => {},
            onError: () => {},
            onFinish: () => reset(),
        });
    };
    return (
        <DashboardLayout>
            <Head title="Create Session" />
            <div>
                <form onSubmit={createSession} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Create New Session
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Make sure to enter valid and real information.
                    </p>

                    <div className="flex justify-between mt-6">
                        <div className="w-1/2 pr-5">
                            <InputLabel
                                className=""
                                htmlFor="title"
                                value="Title"
                            />
                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Title of the session"
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />

                            {/* scheduled_time */}
                            <InputLabel
                                className="mt-8"
                                htmlFor="scheduled_time"
                                hint="When this session will be held?"
                                value="Scheduled time"
                            />
                            <TextInput
                                id="scheduled_time"
                                type="date"
                                name="scheduled_time"
                                value={data.scheduled_time}
                                onChange={(e) =>
                                    setData("scheduled_time", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Scheduled time"
                            />
                            <InputError
                                message={errors.scheduled_time}
                                className="mt-2"
                            />
                            {/* location */}

                            <InputLabel
                                className="mt-8"
                                htmlFor="location"
                                hint={"Where this session will be held?"}
                                value="Location"
                            />
                            <Radio
                                type={locationType}
                                setType={setType}
                            />
                            {locationType === "In-person" && (
                                    <TextInput
                                        id="location"
                                        type="text"
                                        name="location"
                                        value={data.location}
                                        onChange={(e) =>
                                            setData("location", e.target.value)
                                        }
                                        className="mt-1 block w-3/4"
                                        placeholder="Location"
                                    />
                            )}
                            <InputError
                                message={errors.location}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-1/2 pr-3">
                            {/* description */}
                            <InputLabel
                                className=""
                                htmlFor="description"
                                value="Description"
                            />
                            <TextArea
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Description"
                            >
                                {data.description}
                            </TextArea>
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                            {/* skills_taught */}
                            <InputLabel
                                className="mt-8"
                                htmlFor="skills_taught"
                                hint="What skills or knowledge will be taught?"
                                value="Skills and knowledge"
                            />
                            <TextInput
                                id="skills_taught"
                                type="text"
                                name="skills_taught"
                                value={data.skills_taught}
                                onChange={(e) =>
                                    setData("skills_taught", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="skill1, skill2, skill3..."
                            />
                            <InputError
                                message={errors.skills_taught}
                                className="mt-2"
                            />
                            {/* places_limit */}
                            <InputLabel
                                className="mt-8"
                                htmlFor="places_limit"
                                hint="How many people can join this session?"
                                value="Places limit"
                            />
                            <TextInput
                                id="places_limit"
                                type="number"
                                min={1}
                                name="places_limit"
                                value={data.places_limit}
                                onChange={(e) =>
                                    setData("places_limit", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Places limit"
                            />
                            <InputError
                                message={errors.places_limit}
                                className="mt-2"
                            />
                            <div className="mt-6 flex justify-end">
                                <PrimaryButton
                                    className="ml-3"
                                    disabled={processing}
                                >
                                    Submit
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
}

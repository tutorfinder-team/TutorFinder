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
import TextArea from "@/Components/TextArea";
import ReactStars from "react-rating-stars-component";
import Badge from "@/Components/Badge";

export default function FeedbackModal({
    routeDirect,
    className = "",
}) {
    const [confirmingDone, setConfirmingDone] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        review: "",
        rating: 0,
    });

    const confirmUserDone = () => {
        setConfirmingDone(true);
    };

    let rating = {
        size: 30,
        count: 5,
        isHalf: true,
        value: data.rating,
        onChange: newValue => {
            setData("rating", (newValue));
        }
      }

    const addFeedback = (e) => {
        e.preventDefault();

        if (routeDirect) {
            post(routeDirect, {
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
            <button
                onClick={confirmUserDone}
                className="text-primary font-medium"
            >
                Give feedback
            </button>
            <Modal show={confirmingDone} onClose={closeModal}>
                <form onSubmit={addFeedback} className="p-6">
                    <h2 className="text-lg font-medium text-darker dark:text-gray-100">
                        Leave a feedback
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        How was your session? What can we do better? We'd love
                        to hear from you!
                    </p>

                    <div className="mt-4">
                        <InputLabel
                            className="mt-3"
                            htmlFor="rating"
                            value="Rating"
                        />
                       <ReactStars {...rating}/>
                        <InputError
                            message={errors.rating}
                            className="mt-2"
                        />

                        <InputLabel
                            className="mt-3"
                            htmlFor="review"
                            value="Review"
                        />
                        <TextArea
                            id="review"
                            type="text"
                            name="review"
                            value={data.review}
                            onChange={(e) =>
                                setData("review", e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            placeholder="Review"
                        >{data.review}</TextArea>
                        <InputError
                            message={errors.review}
                            className="mt-2"
                        />
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

import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import InputLabel from "@/Components/InputLabel";
import Stars from "@/Components/Stars";
import { usePage, Link } from "@inertiajs/react";

export default function FeedbacksCard({ feedbacks, grid = "grid grid-cols-2 gap-x-4 ", className }) {
    const user = usePage().props.auth.user;
    return (
        <div className={grid + className}>
            {feedbacks.length > 0 && (
                <>
                    {feedbacks.map((f) => (
                        <Card className="mb-2 self-start" key={f.id}>
                            <div>
                                <div className="flexible gap-3">
                                    <Avatar
                                        name={f.fullname}
                                        img={f.picture}
                                        className="w-12 rounded-full"
                                    />
                                    <div>
                                        <Link href={`/profile/${f.username}`}>
                                            <h1 className="font-semibold hover:text-primary duration-100">
                                                {f.id === user.id
                                                    ? "You"
                                                    : f.username}
                                            </h1>
                                        </Link>
                                        <InputLabel
                                            value={`In ${f.createdAt}`}
                                            className="-ml-0 mb-2 text-sm opacity-60"
                                        />
                                        <Stars rating={f.rating}/>
                                    </div>
                                </div>
                                <div className="mt-2 p-1">
                                    <p>{f.review}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </>
            )}
        </div>
    );
}

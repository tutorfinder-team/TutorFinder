import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { BiSearch } from "react-icons/bi";

export function Header() {
    return (
        <header className="py-16 sm:text-center">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
                Latest Sessions
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
                Find Available Sessions with Expert Tutors Now!
            </p>
            <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
                <h2 className="sr-only">Search for available sessions</h2>
                <form
                    action="https://app.convertkit.com/forms/3181837/subscriptions"
                    method="post"
                    className="flex flex-wrap -mx-2"
                >
                    <div className="px-2 grow-[9999] basis-64 mt-3">
                        <div className="group relative">
                            <TextInput icon={BiSearch} placeholder="Search" />
                        </div>
                    </div>
                    <div className="px-2 grow flex mt-3">
                        <PrimaryButton>
                            <BiSearch size={20} />
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </header>
    );
}

export default function FeedSessions() {
    return <div className="sessions">
        <Header />
    </div>;
}

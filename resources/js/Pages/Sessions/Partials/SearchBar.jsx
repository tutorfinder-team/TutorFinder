import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";

export default function SearchBar() {
    const inputRef = useRef("");
    const {search, sort, type} = usePage().props;
    const getQuery = (newSearch, newSort, newType) => {
        const url = new URL(window.location.href);
        if (search) url.searchParams.set('search', search);
        if (sort) url.searchParams.set('sort', sort);
        if (type) url.searchParams.set('type', type);
        return url;
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        router.get(
            getQuery(search, sort, type),
            { search: inputRef.current.value },
            { preserveState: true }
        );
    };
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
                    action=""
                    method="get"
                    onSubmit={handleSubmit}
                    className="flex flex-wrap -mx-2"
                >
                    <div className="px-2 grow-[9999] basis-64 mt-3">
                        <div className="group relative">
                            <TextInput
                                icon={BiSearch}
                                placeholder="Search"
                                value={search || ''}
                                ref={inputRef}
                            />
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

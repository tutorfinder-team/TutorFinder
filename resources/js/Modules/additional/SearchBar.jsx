import { FiSearch } from "react-icons/fi";
import Input from "../parts/Input";
import TextInput from "@/Components/TextInput";

export default function SearchBar() {
    // This function will be called whenever the text input changes
    const searchHandler = (_, value) => {
        let search;
        if (value) {
            search = {
                keyword: value,
            };
        } else {
            search = undefined;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." icon={FiSearch} />
        </form>
    );
}

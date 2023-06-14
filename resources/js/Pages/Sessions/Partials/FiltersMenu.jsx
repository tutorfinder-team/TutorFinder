import { BiDollarCircle, BiSort } from "react-icons/bi";
import Filter from "./Filter";
import { HiLocationMarker } from "react-icons/hi";

export default function FiltersMenu() {
    return (
        <>
            <h1 className="mb-4 text-xl sm:text-3xl tracking-tight font-extrabold">
                Filters
            </h1>
            <Filter
                filterType="sort"
                icon={BiSort}
                heading="Sort by"
                fields={{
                    name: "sort",
                    values: [
                        { key: "new", value: "Recently Added" },
                        { key: "upcoming", value: "Upcoming" },
                        { key: "tr", value: "Top Rated" },
                        { key: "lp", value: "Low Availability" },
                        { key: "hp", value: "High Availability" },
                        // { key: "lp", value: "Lowest price" },
                        // { key: "hp", value: "Highest price" },
                    ],
                }}
            />
            {/* <Filter
                filterType="price"
                icon={BiDollarCircle}
                heading="Price range"
                fields={{
                    name: "price",
                    values: [
                        { key: "dl", value: "Discuss Later" },
                        { key: "low", value: "Low" },
                        { key: "high", value: "High" },
                        { key: "avg", value: "Average" },
                    ],
                }}
            /> */}
            <Filter
                filterType="type"
                icon={HiLocationMarker}
                heading="Session type"
                fields={{
                    name: "type",
                    values: [
                        { key: "online", value: "Online" },
                        { key: "inperson", value: "In-person" },
                    ],
                }}
            />
        </>
    );
}

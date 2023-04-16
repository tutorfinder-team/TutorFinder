import React from "react";
import Header from "./Partials/Header";
import Filters from "./Partials/Filter";
import { BiDollarCircle, BiSort, BiSortDown } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import Select from "@/Components/Select";
import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import FiltersMenu from "./Partials/FiltersMenu";
import SessionsFeed from "./Partials/SessionsFeed";

const Sessions = ({sessions : { data}}) => {
    return (
        <>
            <Header />
            <div className="flex items-baseline">
                <div className="w-1/5 sticky top-20">
                    <FiltersMenu />
                </div>

                <div className="flex-1 p-4">
                    <SessionsFeed sessions={data}/>
                </div>
            </div>
        </>
    );
};

export default Sessions;

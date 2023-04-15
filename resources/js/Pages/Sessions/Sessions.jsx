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

const Sessions = () => {
    // Dummy data for sessions
    const sessions = [
        {
            id: 1,
            title: "Session 1",
            tutor: "Tutor 1",
            description: "Description of Session 1",
            isSubscribed: false,
        },
        {
            id: 2,
            title: "Session 2",
            tutor: "Tutor 2",
            description: "Description of Session 2",
            isSubscribed: false,
        },
        {
            id: 3,
            title: "Session 3",
            tutor: "Tutor 3",
            description: "Description of Session 3",
            isSubscribed: false,
        },
    ];

    return (
        <>
            <Header />
            <div className="flex items-baseline">
                <div className="w-1/5 sticky top-20">
                    <FiltersMenu />
                </div>

                <div className="flex-1 p-4">
                    <SessionsFeed sessions={sessions}/>
                </div>
            </div>
        </>
    );
};

export default Sessions;

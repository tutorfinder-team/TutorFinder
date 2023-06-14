import React from "react";
import SearchBar from "./Partials/SearchBar";
import FiltersMenu from "./Partials/FiltersMenu";
import SessionsFeed from "./Partials/SessionsFeed";
import Paginator from "@/Components/Paginator";

const Sessions = ({ sessions, count }) => {
    return (
        <>
            <SearchBar />
            <div className="flex items-baseline">
                <div className="w-1/5 sticky top-20">
                    <FiltersMenu />
                </div>

                <div className="flex-1 p-4 mb-12">
                    <SessionsFeed sessions={sessions.data} />
                    <div className="my-6">
                        <Paginator data={sessions} count={count}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sessions;

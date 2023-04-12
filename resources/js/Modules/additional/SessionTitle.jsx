import React from "react";
import Avatar from "../../Components/Avatar";
function SessionTitle() {
  return (
      <div className="flexible gap-4">
        <Avatar name="yasen" className="rounded-full h-20" />
        <div className="h-20">
          <h1 className=" font-bold mt-3 text-2xl ">
            Data structures and algorithms
          </h1>
          <p className=" text-slate-400 text-xl">
            Yusuf isawi
          </p>
        </div>
      </div>
  );
}

export default SessionTitle;

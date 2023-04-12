import React from "react";
import Avatar from "../../Components/Avatar";
// import { Link } from "react-router-dom";

function SessionLink() {
  return (
    <div className="my-16">
      <div className="flexible-center gap-6">
        <hr className="w-[50%] border-slate-400" />
        <Avatar name="yasen" className="rounded-full h-20" />
        <hr className="w-[50%] border-slate-400" />
      </div>
      <div className="flexible-center flex-col gap-2 mb-16">
        <h2 className=" font-semibold mt-3 text-2xl ">Yusuf isawi</h2>
        <Link to="/profile/yusuf" className="text-primary">
          View profile
        </Link>
      </div>
    </div>
  );
}

export default SessionLink;

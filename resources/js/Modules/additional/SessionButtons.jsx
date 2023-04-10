import React from "react";
import { FaShare, FaInfoCircle } from "react-icons/fa";

function SessionButtons() {
  return (
      <div className="flex gap-x-5 text-darker pt-5">
        <button className="btn-secondary">Save</button>
        <button className="btn-secondary">
          <FaShare size={15} />
        </button>
        <button className="btn-secondary">
          <FaInfoCircle size={15} />
        </button>
      </div>
  );
}

export default SessionButtons;

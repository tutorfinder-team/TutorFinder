import Tags from "./Tags";
import { HiLocationMarker } from "react-icons/hi";
import { toCapital } from "../../utils/utils";
// import { Link } from "react-router-dom";
import Draggable from "./Draggable";

export default function SessionMd({
  id,
  title,
  date,
  tutor,
  location,
  tags,
  placesLeft,
}) {
  return (
    <div
      className={`session px-6 py-4 ring-1 ring-gray-200 hoverMode rounded-3xl flex flex-col justify-between
		w-full lg:w-full md:w-[40vw] md:whitespace-nowrap bg-white
		`}
    >
      <div className="mb-3">
        <Draggable>
          <Link
            to={`session/` + id}
            className="session-title text-2xl font-medium mb-1 duration-100 cursor-pointer"
          >
            {title.length < 50
              ? toCapital(title)
              : `${toCapital(title.slice(0, 45))}...`}
          </Link>
        </Draggable>
        <h2 className="text-md">
          Scheduled for{" "}
          <span className="font-semibold text-primary">{date}</span>
        </h2>
        <span className="text-gray-400 font-medium text-sm">
          By {toCapital(tutor)}
        </span>
      </div>
      <Tags tags={tags} />
      <div className="flexible justify-between mt-3">
        <div className="flexible gap-1">
          <HiLocationMarker size={18} />
          <h3>{toCapital(location)}</h3>
        </div>
        <p className="text-gray-400">{placesLeft} places left</p>
      </div>
    </div>
  );
}

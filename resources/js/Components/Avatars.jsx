import { Link } from "@inertiajs/react";
import Avatar from "./Avatar";

const Avatars = ({ users }) => {
    const usersToShow = users.length <= 8 ? users : users.slice(0, 8);
    return (
        <>
            {usersToShow.map((user) => (
                <Link href={`/profile/${user.username}`} key={user.id}>
                    <Avatar
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 object-cover cursor-pointer"
                        img={user.picture}
                        name={user.fullname}
                    />
                </Link>
            ))}
            {users.length > 8 && ( // Only display the div if remainingUserCount is more than 8
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
                    +{users.length - 8}
                </div>
            )}
        </>
    );
};

export default Avatars;

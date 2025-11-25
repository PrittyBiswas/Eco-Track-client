import React, { useContext } from "react";
import { ActivitiesContext } from "../context/ActivitiesProvider";

const MyActivities = () => {
    const { activities, handleRemove } = useContext(ActivitiesContext);

    if (activities.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">No activities joined yet.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-10 mb-10">
            <h3 className="text-2xl font-semibold mb-6">My Activities</h3>
            <ul className="w-full max-w-md space-y-4">
                {activities.map((activity) => (
                    <li
                        key={activity.id}
                        className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <p className="text-lg font-medium">
                            [{activity.type}] {activity.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{activity.joinedAt}</p>
                        <button
                            onClick={() => handleRemove(activity.id)}
                            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyActivities;

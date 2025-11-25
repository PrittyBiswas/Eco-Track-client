import React, { useEffect, useState } from "react";

const UserChallenges = () => {
    const [userChallenges, setUserChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/UserChallenges")
            .then((res) => res.json())
            .then((data) => {
                setUserChallenges(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading UserChallenges:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-lg">Loading...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-8  ">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                Your Challenges
            </h2>

            {userChallenges.length === 0 ? (
                <p className="text-center text-gray-600">No challenges found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {userChallenges.map((challenge) => (
                        <div
                            key={challenge._id}
                            className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                        >

                            <h3 className="text-xl font-semibold text-green-700">
                                {challenge.userId}
                            </h3>
                            <p className="text-gray-600 mt-2">{challenge.status}</p>
                            <p className="font-medium mt-2">Duration: {challenge.joinDate} days</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserChallenges;

import React, { useEffect, useState } from "react";
import Challenges from "./Challenges";

const AllChallenges = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Challenges")
            .then((res) => res.json())
            .then((data) => setChallenges(data))
            .catch((error) =>
                console.log("Error fetching all challenges:", error)
            );
    }, []);

    return (
        <div className="px-10">
            <h1 className="text-4xl font-bold text-center mt-10">
                All Challenges
            </h1>

            <Challenges challenges={challenges} />
        </div>
    );
};

export default AllChallenges;


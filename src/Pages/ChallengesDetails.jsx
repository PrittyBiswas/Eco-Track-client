import { Link, useLoaderData } from "react-router";

const ChallengesDetails = () => {
    const challenge = useLoaderData();
    console.log("Loaded challenge:", challenge);

    if (!challenge)
        return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10 mb-10 p-6 bg-white rounded-xl shadow-secondary">

            <div className="flex flex-col md:flex-row gap-6 items-start">

                {/* IMAGE */}
                <img
                    src={challenge.imageUrl}
                    alt={challenge.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-xl border border-green-600 shadow-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-green-700 mb-3">
                        {challenge.title}
                    </h2>

                    <p className="text-gray-600 mb-3">
                        {challenge.description}
                    </p>

                    <p className="text-gray-800 font-medium mb-6">
                        Duration Date:
                        <span className="text-secondary">
                            {" "}
                            {challenge.startDate} - {challenge.endDate}
                        </span>
                    </p>

                    {/* JOIN NOW BUTTON */}
                    <button className="btn bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                        Join Now
                    </button>

                    {/* GO BACK BUTTON */}
                    <Link
                        to="/AllChallenges"
                        className="mt-4 ml-4 inline-block px-2 py-2 rounded-lg border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition"
                    >
                        ← Go Back
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ChallengesDetails;

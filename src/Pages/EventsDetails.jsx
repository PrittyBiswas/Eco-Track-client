import React, { useContext, } from 'react';
import { useLoaderData, Link } from 'react-router';
import { ActivitiesContext } from '../context/ActivitiesProvider';

const EventsDetails = () => {
    const event = useLoaderData();
    const { handleJoin } = useContext(ActivitiesContext);
    handleJoin(event, "Event");


    if (!event)
        return <p className="text-center mt-10">Loading...</p>;


    return (
        <div className="max-w-4xl mx-auto mt-10 mb-10 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">

                {/* IMAGE */}
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-xl border border-green-600 shadow-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-green-700 mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <p className="text-gray-800 font-medium mb-6">
                        Duration Date: <span className="text-secondary">{event.startDate} - {event.endDate}</span>
                    </p>

                    {/* JOIN NOW BUTTON */}
                    <button
                        onClick={handleJoin}
                        className="btn bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                    >
                        Join Now
                    </button>

                    {/* GO BACK BUTTON */}
                    <Link
                        to="/events"
                        className="mt-4 ml-4 inline-block px-3 py-2 rounded-lg border border-green-600 text-green-700 font-medium hover:bg-green-600 hover:text-white transition"
                    >
                        ← Go Back
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default EventsDetails;

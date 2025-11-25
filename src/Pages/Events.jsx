import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/event")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading events:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                All Events
            </h2>

            {events.length === 0 ? (
                <p className="text-center text-gray-600">No events found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                        >
                            <h3 className="text-xl font-semibold text-green-700">{event.title}</h3>
                            <p className="text-gray-600 mt-2">{event.description}</p>
                            <p className="font-medium mt-2">Participants: {event.currentParticipants || 0}</p>

                            {/* Event Details Button */}
                            <Link
                                to={`/eventDetails/${event._id}`} // use the correct dynamic ID
                                className="mt-4 inline-block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                See Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Events;

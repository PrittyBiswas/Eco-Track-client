import React, { createContext, useState, useEffect } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState(() => {
        const saved = localStorage.getItem("activities");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("activities", JSON.stringify(activities));
    }, [activities]);


    const handleJoin = (item, type) => {
        const alreadyJoined = activities.find(a => a.id === item._id);
        if (alreadyJoined) {
            alert("You already joined this activity!");
            return;
        }

        const newActivity = {
            id: item._id,
            title: item.title,
            type: type, 
            joinedAt: new Date().toLocaleString(),
        };

        setActivities([...activities, newActivity]);
        alert("Added to your activities!");
    };

    const handleRemove = (id) => {
        setActivities(activities.filter(a => a.id !== id));
        alert("Removed from your activities!");
    };

    return (
        <ActivitiesContext.Provider value={{ activities, handleJoin, handleRemove }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

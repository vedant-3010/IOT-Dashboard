// PetTrackerDashboard.js
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";


const PetTrackerDashboard = () => {
    const [location, setLocation] = useState("19.197907061527534, 72.82725739426185");
    const [temperature, setTemperature] = useState(35.45);
    const [humidity, setHumidity] = useState(32.5);

    useEffect(() => {
		const intervalRef = setInterval(() => {
			axios.get("http://localhost:5050/").then((res) => {
				console.log(res.data);

				setLocation(res.data.position);
				setTemperature(res.data.temperature);
				setHumidity(res.data.humidity);
			});
		}, 1000);

		return () => clearInterval(intervalRef);
	}, []);




    return (
        <div className="dashboard">
            <Card title="Temperature" value={temperature} />
            <Card title="Humidity" value={humidity} />
            <Card title="Location" hasButton={true} location={location} />
        </div>
    );
};

export default PetTrackerDashboard;

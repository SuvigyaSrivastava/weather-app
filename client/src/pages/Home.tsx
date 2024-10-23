import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const Home: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any[]>([]);
    const [unit, setUnit] = useState<'C' | 'F'>('C');  // Default unit is Celsius

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/latest');
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Live Weather Data</h2>

            {/* Temperature Unit Selection */}
            <div className="mb-6">
                <label className="mr-4 font-semibold">Select Temperature Unit:</label>
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as 'C' | 'F')}
                    className="border border-green-500 p-2 rounded-lg"
                >
                    <option value="C">Celsius (°C)</option>
                    <option value="F">Fahrenheit (°F)</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {weatherData.map((item) => (
                    <WeatherCard key={item.city} city={item.city} data={item.data} unit={unit} />
                ))}
            </div>
        </div>
    );
};

export default Home;

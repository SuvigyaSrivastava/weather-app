import React from 'react';

interface WeatherCardProps {
    city: string;
    data: {
        temperature: number;  // Temperature in Kelvin from API
        feelsLike: number;     // Feels-like temperature in Kelvin
        condition: string;
        timestamp: number;
    };
    unit: 'C' | 'F';  // User-selected unit (Celsius or Fahrenheit)
}

// Helper function for temperature conversion
const convertTemperature = (kelvin: number, unit: 'C' | 'F'): number => {
    if (unit === 'C') {
        return kelvin - 273.15;  // Convert Kelvin to Celsius
    } else {
        return (kelvin - 273.15) * 9/5 + 32;  // Convert Kelvin to Fahrenheit
    }
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city, data, unit }) => {
    const date = new Date(data.timestamp * 1000).toLocaleString();
    const temperature = convertTemperature(data.temperature, unit);
    const feelsLike = convertTemperature(data.feelsLike, unit);
    const unitSymbol = unit === 'C' ? '°C' : '°F';

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-green-500">
            <h3 className="text-xl font-bold text-green-700">{city}</h3>
            <p>Temperature: {temperature.toFixed(2)} {unitSymbol}</p>
            <p>Feels Like: {feelsLike.toFixed(2)} {unitSymbol}</p>
            <p>Condition: {data.condition}</p>
            <p>Last Updated: {date}</p>
        </div>
    );
};

export default WeatherCard;

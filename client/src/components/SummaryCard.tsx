import React from 'react';

interface SummaryCardProps {
    summary: {
        city: string;
        date: string;
        avgTemp: number;  // Temperature in Kelvin from API
        maxTemp: number;
        minTemp: number;
        dominantCondition: string;
    };
    unit: 'C' | 'F';  // User-selected unit
}

// Helper function for temperature conversion
const convertTemperature = (kelvin: number, unit: 'C' | 'F'): number => {
    if (unit === 'C') {
        return kelvin - 273.15;  // Convert Kelvin to Celsius
    } else {
        return (kelvin - 273.15) * 9/5 + 32;  // Convert Kelvin to Fahrenheit
    }
};

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, unit }) => {
    const avgTemp = convertTemperature(summary.avgTemp, unit);
    const maxTemp = convertTemperature(summary.maxTemp, unit);
    const minTemp = convertTemperature(summary.minTemp, unit);
    const unitSymbol = unit === 'C' ? '°C' : '°F';

    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-green-500">
            <h3 className="text-2xl font-bold text-green-700">{summary.city} - {new Date(summary.date).toLocaleDateString()}</h3>
            <p><span className="font-semibold">Avg Temp:</span> {avgTemp.toFixed(2)} {unitSymbol}</p>
            <p><span className="font-semibold">Max Temp:</span> {maxTemp.toFixed(2)} {unitSymbol}</p>
            <p><span className="font-semibold">Min Temp:</span> {minTemp.toFixed(2)} {unitSymbol}</p>
            <p><span className="font-semibold">Dominant Condition:</span> {summary.dominantCondition}</p>
        </div>
    );
};

export default SummaryCard;

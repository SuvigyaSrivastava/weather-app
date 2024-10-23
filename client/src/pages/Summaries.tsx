import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryCard from '../components/SummaryCard';
import { API_ENDPOINT } from '../constants';

const Summaries: React.FC = () => {
    const [summaries, setSummaries] = useState<any[]>([]);
    const [unit, setUnit] = useState<'C' | 'F'>('C');  // Default unit is Celsius

    useEffect(() => {
        fetchSummaries();
    }, []);

    const fetchSummaries = async () => {
        try {
            const response = await axios.get(API_ENDPOINT +'/api/weather/daily-summaries');
            setSummaries(response.data);
        } catch (error) {
            console.error('Error fetching summaries:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-extrabold text-green-600 text-center mb-6">Daily Weather Summaries</h2>

            {/* Temperature Unit Selection */}
            <div className="mb-6 text-center">
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {summaries.map((summary) => (
                    <SummaryCard key={`${summary.city}-${summary.date}`} summary={summary} unit={unit} />
                ))}
            </div>
        </div>
    );
};

export default Summaries;

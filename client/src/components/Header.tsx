import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Weather Monitoring</h1>
                <nav className="flex space-x-6">
                    <div className="hover:bg-blue-700 rounded-lg transition duration-300">
                        <Link to="/" className="block px-4 py-2">
                            Home
                        </Link>
                    </div>
                    <div className="hover:bg-blue-700 rounded-lg transition duration-300">
                        <Link to="/summaries" className="block px-4 py-2">
                            Daily Summaries
                        </Link>
                    </div>
                    <div className="hover:bg-blue-700 rounded-lg transition duration-300">
                        <Link to="/alerts" className="block px-4 py-2">
                            Alerts & Trends
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

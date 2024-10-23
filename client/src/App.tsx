import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Summaries from './pages/Summaries';
import Header from './components/Header'; // Import Header
import AlertsAndTrends from './pages/AlertsAndTrends';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header /> {/* Add the Header here */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/summaries" element={<Summaries />} />
                    < Route path="/alerts" element={<AlertsAndTrends />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

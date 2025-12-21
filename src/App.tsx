import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullGalleryPage from './pages/FullGalleryPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<FullGalleryPage />} />
            </Routes>
        </Router>
    );
};

export default App;

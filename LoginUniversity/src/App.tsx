import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginInicial from './Components/login';
import Catalog from './Components/catalogStatus/catalog.tsx';
import TopNavBar from './Components/common/TopNavbar.tsx'; // Ajusta la ruta según tu estructura

const AppContent: React.FC = () => {
    const location = useLocation();
    const showNavBar = location.pathname !== '/login' && location.pathname !== '/';

    return (
        <>
            {showNavBar && <TopNavBar />}
            <Routes>
                <Route
                    path="/login"
                    element={<LoginInicial />}
                />
                <Route
                    path="/home"
                    element={<Catalog />}
                />
                <Route
                    path="/explorar"
                    element={<Catalog />}
                />
                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;

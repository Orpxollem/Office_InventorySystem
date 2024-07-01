import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform any sign-out logic here (e.g., clearing auth tokens, etc.)
        navigate('/', { replace: true });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default Dashboard;

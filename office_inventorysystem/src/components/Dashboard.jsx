import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log('userId:', userId);
        if (userId) {
            axios.get(`http://localhost:5000/user/${userId}`)
                .then(response => {
                    if (response.data.name) {
                        setUserName(response.data.name);
                    } else {
                        console.log('User not found');
                    }
                })
                .catch(error => {
                    console.error('There was an error fetching the user data!', error);
                });
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('userId');
        navigate('/', { replace: true });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome to the Office Inventory System, {userName}</h2>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default Dashboard;

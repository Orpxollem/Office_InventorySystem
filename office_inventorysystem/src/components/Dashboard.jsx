import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import './Dashboard.css';
import SideMenu from './SideMenu';
import { FaUserTie, FaMailBulk } from "react-icons/fa";

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setDropdownNotify(false);
    };

    const [dropdownNotify, setDropdownNotify] = useState(false);

    const toggleDropdownNotify = () => {
        setDropdownNotify(!dropdownNotify);
        setDropdownVisible(false);
    };

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

            <div className='DashHeader'>
                <Image src={require('../assets/login-form.jpg')}/>
                <Space>
                    <FaMailBulk style={{fontSize: 22, marginTop: 2}} className='messageIcon' onClick={toggleDropdownNotify}/>
                    {dropdownNotify &&(
                        <div className="dropdown-notify">
                            <div className='notify-item'>No Mesagges yet</div>
                      </div>
                    )}
                    <FaUserTie style={{ fontSize: 25 }} className='profileIcon' onClick={toggleDropdown}/>
                    {dropdownVisible &&(
                        <div className="dropdown-menu">
                            <div className='dropdown-item'>{userName}</div>
                            <div className="dropdown-item"><button onClick={handleSignOut} className='DashLogout'>LOG-OUT</button></div>
                      </div>
                    )}
                </Space>
            </div>

            <Space className='SideMenuandDashContent'>

                <SideMenu />

                <div className='DashContent'>
                    <h1>Dashboard</h1>
                    <h2>Welcome to the Office Inventory System, {userName}</h2>
                </div>

            </Space>
            
            
        </div>
    );
}

export default Dashboard;

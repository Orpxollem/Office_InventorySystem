import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import login_image from '../assets/MOC-login.jpg';
import form_image from '../assets/login-form.jpg';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            staffId: event.target.staffId.value,
            password: event.target.password.value,
        };

        fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                navigate('/dashboard', { replace: true });
            } else {
                console.error('Login failed:', data.message);
                alert('Login failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='container'>
            <div className='header'>
                <img src={login_image} alt='MOC LOGO'/>
            </div>

            <form name="signin_form" onSubmit={handleSubmit}>
                <div>
                    <img src={form_image} alt='FORM HEADER'/>
                </div>
                <div>
                    <label>STAFF ID:</label>
                    <input type="text" name="staffId" required />
                </div>
                <div>
                    <label>PASSWORD:</label>
                    <input type="password" name="password" required />
                </div>
                <button type='submit'>Sign In</button>
            </form>

            <div className='tag'>
                © Powered by the CyberX Team
            </div>
        </div>
    );
}

export default SignIn;

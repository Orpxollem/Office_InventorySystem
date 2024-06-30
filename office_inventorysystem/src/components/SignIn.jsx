import React from 'react';
import './SignIn.css'
import login_image from '../assets/MOC-login.jpg' 
import form_image from '../assets/login-form.jpg'

class SignIn extends React.Component {
    handleSubmit = (event) => {
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
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        return (
          <div className='container'>
          <div className='header'>
            <img src={login_image} alt='MOC LOGO'/>
          </div>
    
          <form name="signin_form" onSubmit={this.handleSubmit}>
            <div>
              <img src={form_image} alt='FORM HEADER'/>
            </div>
            <div>
              <label>
                STAFF ID:
              </label>
              <input type="text" name="staffId" required />
            </div>
            <div>
              <label>
                PASSWORD:
              </label>
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
}

export default SignIn;

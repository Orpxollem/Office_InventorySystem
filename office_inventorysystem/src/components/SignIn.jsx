import React from 'react'
import './SignIn.css'
import login_image from '../assets/MOC-login.jpg' 
import form_image from '../assets/login-form.jpg'

const SignIn = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img src={login_image} alt='MOC LOGO'/>
      </div>

      <form>
        <div>
          <img src={form_image} alt='FORM HEADER'/>
        </div>
        <div>
          <label>
            STAFF ID:
          </label>
          <input type='text'/>
        </div>
        <div>
          <label>
            PASSWORD:
          </label>
          <input type='text'/>
        </div>
        <button type='submit'>Sign In</button>
      </form>

      <div className='tag'>
        © Powered by the CyberX Team
      </div>

      
    </div>
  )
}

export default SignIn
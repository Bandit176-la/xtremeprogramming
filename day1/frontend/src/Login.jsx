//import { useState } from 'react'
import './Login.css';

function Login() {
  return (    
    <>
    <div className="large">
      <div className="login-container">
        <div className="facebook">
          <h1>Facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life
          </p>
        </div>
      
        <div className="login">
          <form action="#" method='POST'>
            <input type="text" placeholder='Email address or Phone number' name='credential' id='credential' /> <br />
            <input type="password" name="passsword" id="password" placeholder='Password' /> <br />
            <input type="submit" id='sbmt' value="Log in" />
            <a href='#'> Forgotten password? </a>
          </form>
          <hr />
          <button>
            Create new account
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login

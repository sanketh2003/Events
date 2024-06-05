import React from 'react'
import './LoginRegister.css';

const LoginRegister = () => {
  return (
    <div className='wrapper'>
        <div className='form-box login'>
            <form action=" ">
                <h1>Login</h1>
                <div className="input">
                    <input type="text" 
                    placeholder='Username' 
                    required/>
                </div>
                <div className="input">
                    <input type="password" 
                    placeholder='Password' 
                    required/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remeber me</label>
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginRegister;
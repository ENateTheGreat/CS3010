import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const navigation = useNavigate();

  const loginFunction = (e) => {
    e.preventDefault();
    props.handleLogin();
    navigation('/')
  }

  return (
    <div className="login-form">
      <form onSubmit={loginFunction}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          name="username"
          className="form"
          id="username-login"
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password"
          className="form"
          id="password-login"
        />
        <div className="buttons-group">
          <button id="login-reset" className="nav-button" >Reset</button>
          <button type="submit" className="nav-button">Submit</button>
        </div>
        <div id="login-error" style={{color: 'red'}}></div>
      </form>
    </div>
  )
}

export default Login

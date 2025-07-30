import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../api/api';

const Login = (props) => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigate();

  const loginFunction = (e) => {
    e.preventDefault();
    apiClient.post('/login', formData)
    props.handleLogin();
    navigation('/');
  };

  const resetFunction = () => {
    setFormData({username: '', password: ''})
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={loginFunction}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          name="username"
          className="form"
          id="username-login"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password"
          className="form"
          id="password-login"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <div className="buttons-group">
          <button id="login-reset" className="nav-button" onClick={resetFunction}>Reset</button>
          <button type="submit" className="nav-button">Submit</button>
        </div>
        <div id="login-error" style={{color: 'red'}}></div>
      </form>
    </div>
  )
}

export default Login

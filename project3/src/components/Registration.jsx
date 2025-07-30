import { useState } from 'react'
import { apiClient } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const navigation = useNavigate();

  const registerFunction = (e) => {
    e.preventDefault();
    console.log(formData)
    apiClient.post('/registration', formData);
    navigation('/login')
  };

  const resetFunction = () => {
    setFormData({ username: '', password: '' })
  };

  return (
    <main>
      <div id="registration-form">
        <h1>Registration</h1>
        <form action="submit" onSubmit={registerFunction}>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            placeholder="Enter your username"
            aria-label="Username field"
            name="username"
            className="form"
            id="username-registration"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value})}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            aria-label="Password field"
            name="password"
            className="form"
            id="password-registration"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value})}
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>  {/* Add validation for the final submission */}
          <input 
            type="password"
            placeholder="Confirm your password"
            aria-label="Password confirmation field"
            name="passwordConfirm"
            className="form"
            id="password-confirm-registration"
          />
          <div id="buttons-group">
            <button type="button" id="registration-reset" className="nav-button" onClick={resetFunction}>Reset</button>
            <button type="submit" id="registration-submit" className="nav-button">Submit</button>
          </div>
          <div id="registration-error" style={{color: 'red'}}></div>
        </form>
      </div>
    </main>
  )
}

export default Registration

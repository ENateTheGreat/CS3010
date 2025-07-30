import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/api';
import { STATES } from '../content/STATES'

const Account = () => {

  useEffect(() => {
    apiClient.get('/account');
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  const submitFunction = (e) => {
    e.preventDefault();
    apiClient.post('/account', formData);
  };

  const resetFunction = () => {
    setFormData({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
    })
  };

  return (
    <div id="account-form">
      <form className="account-form" action="submit" onSubmit={submitFunction}>
        <div className="double-input">
          <div className="label-align">
            <label htmlFor="firstName">First Name</label>
            <input 
              className="form double"
              type="text" 
              name="firstName"
              placeholder="Enter your first name"
              id="firstName-account"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className="label-align">
            <label htmlFor="lastName">Last Name</label>
            <input 
              className="form double"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName-account"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>
          <label htmlFor="address1">Address Line 1</label>
          <input 
            type="text" 
            name="address1"
            className="form"
            placeholder="Address Line 1"
            id="address1-account"
            value={formData.address1}
            onChange={(e) => setFormData({...formData, address1: e.target.value})}
          />
        <label htmlFor="address2">Address Line 2</label>
        <input 
          type="text" 
          className="form"
          name="address2"
          placeholder="Address Line 2"
          id="address2-account"
          value={formData.address2}
          onChange={(e) => setFormData({...formData, address2: e.target.value})}
        />
        <div className="double-input">
          <div className="label-align">
            <label htmlFor="city">City</label>
            <input 
              className="form"
              type="text" 
              name="city"
              placeholder="Enter your city"
              id="city-account"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
          </div>
          <div className="label-align">
            <label htmlFor="state">State</label>
            <select 
              className="form"
              name="state"
              id="state-account"
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
            >
            <option value="" disabled defaultValue={true}>Select a state</option>
            {STATES.map(s => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
            </select>
          </div>
        </div>
        <label htmlFor="zip">Zip Code</label>
        <input 
          type="number" 
          className="form"
          name="zip"
          placeholder="Enter your zip code"
          id="zip-account"
          value={formData.zip}
          onChange={(e) => setFormData({...formData, zip: e.target.value})}
        />
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="number" 
          className="form"
          name="phone"
          placeholder="Enter your phone number"
          id="phone-account"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          className="form" 
          name="email"
          placeholder="Enter your email address"
          id="email-account"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <div className="button-group">
          <button id="account-reset" className="nav-button" onClick={resetFunction}>Reset</button>
          <button type="submit" id="account-submit" className="nav-button">Submit</button>
        </div>
        <div id="account-error"></div>
      </form>
    </div>
  )
}

export default Account

import React from 'react'

const Registration = () => {
  return (
    <main>
      <div id="registration-header">
        <h1>Registration</h1>
      </div>
      <div id="registration-form">
        <form action="submit">
          <label for="username">Username</label>
          <input 
            type="text"
            placeholder="Enter your username"
            aria-label="Username field"
            name="username"
            class="form"
            id="username-registration"
          />
          <label for="password">Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            aria-label="Password field"
            name="password"
            class="form"
            id="password-registration"
          />
          <label for="passwordConfirm">Confirm Password</label>
          <input 
            type="password"
            placeholder="Confirm your password"
            aria-label="Password confirmation field"
            name="passwordConfirm"
            class="form"
            id="password-confirm-registration"
          />
          <div id="buttons-group">
            <button type="button" id="registration-reset" class="nav-button">Reset</button>
            <button type="submit" id="registration-submit" class="nav-button">Submit</button>
          </div>
          <div id="registration-error" style={{color: 'red'}}></div>
        </form>
      </div>
    </main>
  )
}

export default Registration

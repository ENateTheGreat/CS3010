// wait for the page content to load before executing script
document.addEventListener('DOMContentLoaded', () => {

  // form components
  const form = document.querySelector('#registration-form form');
  const resetButton = document.getElementById('registration-reset');
  
  // form logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear errors on submit -- would be useful for server timeout errors, not really needed with the input clearing in this instance
    document.getElementById('registration-error').innerHTML = '';
    
    // Frequently used components // could add the registration-error for cleaner code
    const username = document.getElementById('username-registration').value.trim();
    const password = document.getElementById('password-registration').value;
    const passwordConfirm = document.getElementById('password-confirm-registration').value;
    
    // form validation
    if (!username || !password || !passwordConfirm) {
      document.getElementById('registration-error').innerHTML = 'Please fill in all fields';
      return;
    };
    if (password !== passwordConfirm) {
      document.getElementById('registration-error').innerHTML = 'Passwords do not match';
      return;
    };
    if (password.length < 6) {
      document.getElementById('registration-error').innerHTML = 'Password must be at least 6 characters long';
      return;
    };

    const userData = {
      username: username,
      password: password, // Storing in session storage is bad practice but its not going to prod
      loggedIn: false, // new data property to avoid the user getting erased after each logout
      // not adding ability to add more than one user
    };

    console.log(userData);
    
    // set user data in the session storage for login 'functionality'
    sessionStorage.setItem('user', JSON.stringify(userData));
    
    // redirect when validation passes
    window.location.href = './login.html'
  });
  
  // reset buton functionality
  resetButton.addEventListener('click', () => {
    form.reset();
  });
  
  // clear form errors when user starts typing again
  document.querySelectorAll('.form').forEach(input => {
    input.addEventListener('input', () => {
      document.getElementById('registration-error').innerHTML = '';
    });
  });
});

/**
 * Could add extra functionality to the password fields to have a button that changes the input type from password to input and back to allow for the viewing of passwords
 */
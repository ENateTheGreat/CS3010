// Wait for the page content to load before executing script
document.addEventListener('DOMContentLoaded', () => {

  // Form components
  const form = document.querySelector('#login-form form');
  const resetButton = document.getElementById('login-reset');
  const error = document.getElementById('login-error');

  // User data to compare for login
  const user = JSON.parse(sessionStorage.getItem('user'));

  // Form logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear errors on submit
    error.innerHTML = '';

    // Input components
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;

    // Form validation
    if (!username || !password) {
      error.innerHTML = 'Please fill in all fields';
      return;
    };
    if (username !== user.username) {
      error.innerHTML = 'Username or password is incorrect';
      return;
    };
    if (password !== user.password) {
      error.innerHTML = 'Username or password is incorrect';
      return;
    };

    const updatedUser = { ...user, loggedIn : true };
    sessionStorage.setItem('user', JSON.stringify(updatedUser));

    window.location.href = './home.html'
  });

  // Reset button functionality
  resetButton.addEventListener('click', () => {
    form.reset();
  });

  // Clear form errors when user starts typing again
  document.querySelectorAll('.form').forEach(input => {
    input.addEventListener('input', () => {
      document.getElementById('login-error').innerHTML = '';
    });
  });
});
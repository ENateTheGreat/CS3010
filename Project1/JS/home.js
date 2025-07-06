document.addEventListener('DOMContentLoaded', () => {
  
  const user = JSON.parse(sessionStorage.getItem('user'));
  
  const navButtons = document.getElementById('nav-buttons');
  
  if (user?.loggedIn === true) {
    navButtons.innerHTML = `
    <a href='./account.html' class='nav-button'>Account</a>
    <a href='#' class='nav-button' id='logout-button'>Logout</a>
    `;
    
    document.getElementById('logout-button').addEventListener('click', () => {
      const updatedUser = { ...user, loggedIn: false };
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
      window.location.href = './logout.html';
    });
  } else {
    navButtons.innerHTML = `
    <a href='./login.html' class='nav-button'>Login</a>
    <a href='./registration.html' class='nav-button'>Register</a>
    `;
  };
  
})
document.addEventListener('DOMContentLoaded', () => {

  let countdown = 3;
  const countdownElement = document.getElementById('countdown');

  const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      window.location.href = './home.html';

      document.getElementById('nav-buttons').innerHTML = `
        <a class='nav-button' href='./home.html'>Home</a>
      `
    }
  }, 1000);
})
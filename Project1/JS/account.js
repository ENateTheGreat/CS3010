import { STATES } from './STATES.js';

document.addEventListener('DOMContentLoaded', () => {
  // Component Selectors
  const form = document.querySelector('#account-form form');
  const resetButton = document.getElementById('account-reset');
  const accountError = document.getElementById('account-error');
  const stateSelector = document.getElementById('state-account');
  
  // States map for the dropdown
  STATES.forEach(s => {
    const option = document.createElement('option');
    option.value = s.name;
    option.textContent = s.code;
    stateSelector.appendChild(option);
  });
  
  // Form logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Form input selectors
    const firstName = document.getElementById('firstName-account').value;
    const lastName = document.getElementById('lastName-account').value;
    const address1 = document.getElementById('address1-account').value;
    const address2 = document.getElementById('address2-account').value;
    const city = document.getElementById('city-account').value;
    const state = document.getElementById('state-account').value;
    const zip = document.getElementById('zip-account').value;
    const phone = document.getElementById('phone-account').value;
    const email = document.getElementById('email-account').value;

    // Clear errors on submit -- moreso for server errors
    accountError.innerHTML = '';

    /**
     * Form Validation
     * @todo - add these validations
     * @todo - zip must be 5 characters long
     * @todo - phone must be 10 characters long
     * @todo - email must follow the regex pattern for email format
     */
    if (!firstName || !lastName || !address1 || !city || !state || !zip || !phone || !email) {
      console.log(firstName, lastName, address1, city, state, zip, phone, email)
      accountError.innerHTML = 'Please fill in all fields';
      return;
    }
    
    // Creation of data object 
    const accountData = {
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2 || null, // Not required -- for extra address info
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      email: email,
    };

    console.log(accountData);
    // Eventually store this and display, allow for user name to be displayed on home page i.e. greetings {user}
  });

  // reset buton functionality
  resetButton.addEventListener('click', () => {
    form.reset();
  });

  // clear form errors when user starts typing again
  document.querySelectorAll('.form').forEach(input => {
    input.addEventListener('input', () => {
      document.getElementById('account-error').innerHTML = '';
    });
  });
});
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())

app.listen(port, () => {
  console.log('App listening on port ' + port);
});

app.post('/login', (req, res) => {
  const {username, password} = req.body;

  console.log('LOGIN DATA', username, password);

  res.status(200).json({ message: 'Login successful'})
})

app.post('/registration', (req, res) => {
  const {username, password} = req.body;

  console.log('REGISTRATION DATA', username, password);

  res.status(201).json({ message: 'Registration successful'})
})

app.post('/account', (req, res) => {
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    phone,
    email,
  } = req.body; // Needs to be other data

  console.log('ACCOUNT DATA',
                firstName,
                lastName,
                address1,
                address2,
                city,
                state,
                zip,
                phone,
                email,); 

  res.status(201).json({ message: 'Account updated'})
})

app.get('/account', (req, res) => {
  res.status(200).json({ message: 'Account retrieved'})
})
import { useState } from 'react'
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';
import NoPage from './components/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn)
    
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout loggedIn={loggedIn} handleLogin={handleLogin} />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login handleLogin={handleLogin} />} />
          <Route path='registration' element={<Registration handleLogin={handleLogin} />} />
          <Route path='account' element={<Account />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

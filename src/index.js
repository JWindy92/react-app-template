import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import LoginPage from './pages/LoginPage';

ReactDOM.render(
  <BrowserRouter>/>
    <App>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

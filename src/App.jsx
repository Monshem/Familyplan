import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import  ContactUs  from './pages/contacts/Contact';
import Expenselist from './components/Expenselist';
import Signup from './pages/googleSignin/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/expenslist" element={<Expenselist />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

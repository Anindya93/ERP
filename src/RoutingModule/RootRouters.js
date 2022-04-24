import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Components/Home/Home';
import Header from '../Components/Layout/Header';
import Registration from '../Components/Registration/Registration';
import Footer from '../Components/Footer/Footer';
import Features from '../Components/Features/Products';
import Contact from '../Components/Contact Us/Contact';
import Login from '../Components/Login/Login';


export default function RootRouters() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path='Features' element={<Features/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path="Registration" element={<Registration/>} />
      <Route path="Login" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
    
    

  )
}

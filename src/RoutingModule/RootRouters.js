import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Components/Home/Home';
import Header from '../Components/Layout/Header';
import Registration from '../Components/Registration/Registration';


export default function RootRouters() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="Registration" element={<Registration/>} />
      </Routes>
    </Router>
  )
}

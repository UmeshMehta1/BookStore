import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contant from './components/Contant';
import NoPage from './components/NoPage';
import About from './components/About';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';
import Signup from './components/Signup';



function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/contact" element={<Contant />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

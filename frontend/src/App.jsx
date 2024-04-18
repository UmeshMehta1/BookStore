
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Contant from './components/Contant';
import NoPage from './components/NoPage';
import About from './components/About';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';
import Signup from './components/Signup';
import { useAuth } from './components/context/AuthProvider';


function App() {

  const [authUser, setAuthUser] = useAuth();

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
          <Route path="/contact" element={<Contant />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
     
    </>
  )
}

export default App

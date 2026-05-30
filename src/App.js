import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { Router, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import { AnimatePresence } from 'framer-motion';
>>>>>>> upstream/main

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div>
<<<<<<< HEAD
        <Router>
          <Routes>
            <Route path= '/login' element={LoginPage}/>
            <Route path= '/home' element={HomePage}/>
          </Routes>
        </Router>
=======
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      
>>>>>>> upstream/main
    </div>
  );
}

function App() {
  return (
    <Router>
       <nav>
          <Link to={"/login"}>Login</Link>
          ----------
          <Link to={"/home"}>Home</Link>
        </nav>
      <AnimatedRoutes />
    </Router>
  )
}

export default App;

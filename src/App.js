import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      
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

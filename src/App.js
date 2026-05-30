import logo from './logo.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path= '/login' element={LoginPage}/>
            <Route path= '/home' element={HomePage}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

// src/App.js
import './App.css';
import Dashboard from './components/dashboard';
import Card from './components/card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCard from './components/AddCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-card" element={<AddCard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
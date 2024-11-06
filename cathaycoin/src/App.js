// src/App.js
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  const handleAddCard = () => {
    // Handle add card action
    console.log("Add card clicked");
  };

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
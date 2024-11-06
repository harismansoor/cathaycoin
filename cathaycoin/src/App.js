// App.js
import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Card from "./components/card";

function App() {
  const handleAddCard = () => {
    // Handle add card action
    console.log("Add card clicked");
  };

  return (
    <div className="app">
      <Header
        title="Payment Method"
        actionText="Add card +"
        onActionClick={handleAddCard}
      />
      <main className="main-content">
        <Card />
      </main>
    </div>
  );
}

export default App;

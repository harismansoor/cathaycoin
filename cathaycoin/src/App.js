// App.js
import React from "react";
import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <Footer />
      <div className="resize-message">
        Please minimize the screen to see the mobile view.
      </div>
    </div>
  );
}

export default App;

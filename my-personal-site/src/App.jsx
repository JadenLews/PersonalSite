import React from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import "./index.css";
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Bundle JS (includes Popper.js for dropdowns, modals, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
};

export default App;
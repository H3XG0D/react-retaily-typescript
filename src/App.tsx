import React from 'react';
import './App.css';
import Navbar from "./Components/Header/Navbar";
import Partners from "./Components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Navbar />
          <Partners />

      </React.Fragment>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Partners from "./Components/Partners/Partners";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  const [slider, setSlider] = useState<boolean>(false);
  let switcher = () => {
    setSlider(!slider);
  };

  return (
      <BrowserRouter>
        <div className="App">
          <React.Fragment>
            <Navbar slider={slider} switcher={switcher} />
          </React.Fragment>
        </div>
        <Routes>
          <Route path='one' element={<AboutUs />} />
          <Route path="" element={<Partners slider={slider} />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;

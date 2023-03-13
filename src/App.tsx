import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Partners from "./Components/Partners/Partners";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Vacancies from "./Components/Vacancies/Vacancies";
import Contacts from "./Components/Contacts/Contacts";
import Documents from "./Components/Documents/Documents";
import Retake from "./Components/Partners/Retake";
import Supplier from "./Components/Partners/Supplier";
import Faq from "./Components/Partners/Faq";
import Feedback from "./Components/Partners/Feedback";
import Sidebar from "./Components/Sidebar/Sidebar";
import More from "./Components/Vacancies/More";
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

        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Vacancies" element={<Vacancies />} />
        <Route path="Vacancies/*" element={<More />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Documents" element={<Documents />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Sidebar" element={<Sidebar />} />
        <Route path="Features" element={<Retake slider />} />
        <Route path="Supplier" element={<Supplier />} />
        <Route path="FAQ" element={<Faq slider />} />
        <Route path="Feedback" element={<Feedback slider />} />

        <Route path="" element={<Partners slider={slider} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

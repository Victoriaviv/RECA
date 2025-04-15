import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" index element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service"element={<Service/>}/>
        <Route path="/Contact"element={<Contact/>}/>

      </Routes>
     <Footer/> 
    </BrowserRouter>
  );
}

export default App;

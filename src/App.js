import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import TermsConditions from "./components/TermsConditions";
import SideBar from './components/SideBar'

import ScrollTop from "./components/ScrollTop";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <ScrollTop />
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/services/:name" element={<Services/>} />
            <Route exact path="/faq" element={<Faq/>} />
            <Route exact path="/gallery" element={<Gallery/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <SideBar />
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

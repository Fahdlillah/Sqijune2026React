import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import Studentpage from "./pages/Studentpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import CreateProducts from "./pages/CreateProducts";

const App = () => {
  return (
    <>
      <Router>
         <Nav />
        
        <Routes>
         <Route path="/" element={<Landingpage/>}/>
         <Route path="/students" element={<Studentpage/>}/>
         <Route path="/create-product" element={<CreateProducts/>}/>
         
        </Routes>
          {/* <Hero /> */}
      </Router>

      {/* <Studentpage/> */}
    </>
  );
};

export default App;

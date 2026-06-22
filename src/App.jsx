import React from "react";
import Nav from "./components/Nav";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import CreateProducts from "./pages/CreateProducts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Counter from "./hooks/Counter";
import Showpassword from "./hooks/Showpassword";
import Products from "./hooks/Products";
import CurrencyConverter from "./pages/Currencyconverter";

const App = () => {
  return (
    <>
      <Router>
         <Nav />
          <Counter/>

          <Showpassword/>


          <Products/>


          <CurrencyConverter/>
        <Routes>
         {/* <Route path="/" element={<Landingpage/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
         <Route path="/create-product" element={<CreateProducts/>}/>
         
        </Routes>
       
      </Router>

  
    </>
  );
};

export default App;

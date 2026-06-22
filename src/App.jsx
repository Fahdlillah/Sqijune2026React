import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateProducts from "./pages/CreateProducts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Counter from "./hooks/Counter"
import Showpassword from "./hooks/Showpassword"
import Products from "./hooks/Products"

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const user = {
    name: "Damilola",
    role: "full stack dev",
    gender: "male",
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={user}>
          <Router>
            <Nav />

            <Profile />

            {/* 
          <Counter/>
          <Showpassword/>
          <Products/>
        <Routes>
         {/* <Route path="/" element={<Landingpage/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
         <Route path="/create-product" element={<CreateProducts/>}/>
         
        </Routes>
       
      </Router>

          <Home />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateProducts from "./pages/CreateProducts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Counter from "./hooks/Counter"
import Showpassword from "./hooks/Showpassword";
// import Products from "./hooks/Products";
import Newcounter from "./hooks/Newcounter";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
import AppButton from "./components/AppButton";
import Home from "./components/Home";
import ThemeContext from "./context/ThemeContext";

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
          <Newcounter/> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/create-product" element={<CreateProducts />} />
            </Routes>
          </Router>

          <Home />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

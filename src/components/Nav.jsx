import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaSun } from "react-icons/fa"
import { FaCartArrowDown } from "react-icons/fa"

import "../App.css";
import AppButton from "./AppButton";
import ModeContext from "../context/ModeContext";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = ()=>{
    navigate("/signup")
  }
   const {mode, toggleMode} = useContext(ModeContext);

  const shopsy = ()=>{
    navigate("/")
  }


  return (
    <nav style={style.navs}>
      <div>
        <h1 style={{cursor:"pointer"}}>
          <p onClick={shopsy}>ShopsSy</p>
        </h1>
      </div>
      <div style={style.menulist}>
        <li>Products</li>
        <Link to={"/create-product"}>
          <li style={{color:"black"}}>Create</li>
        </Link>
        <li>Blog</li>
        <li>Contact</li>
      </div>
      <div style={{ display: "flex", gap: "1em", alignItems: 'center' }}>
        <AppButton
          text={"login"}
          bgColor={"white"}
          textColor={"blue"}
          handleClick={handleLogin}
        />
        <AppButton
          text={"Signup"}
          bgColor={"orange"}
          useBorder={"none"}
          textColor={"white"}
          handleClick={handleSignup}
        />
        <FaSun onClick={toggleMode} style={{fontSize: '1.5em'}} />
        <FaCartArrowDown/>
      </div>
    </nav>
  );
};

const style = {
  navs: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    // backgroundColor: mode === 'light' ? '#fff' : '#333',
    // backgroundColor: "aliceblue",
  },
  menulist: {
    display: "flex",
    gap: "2em",
  },
  buttons: {
    padding: "10px 20px",
    backgroundColor: "blue",
    borderRadius: "5px",
    border: "none",
    color: "white",
  },
};

export default Nav;

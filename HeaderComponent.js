import React from "react";
import ReactDOM from "react-dom"
import logo from "./logo.png"


const Header = () => (
    <div id="headerContainer">
        <div className="logoContainer">
            <h2>App</h2>
            <img src={logo} alt="Logo" style={{ width: '200px' }}></img>
        </div>
        <div className="searchContainer">
            <input
            type="text"
            placeholder="search"/>
        </div>

        <div className="userIcon">
            <img src={logo} alt="userIcon" style={{ width: '200px', height: '200px'}}></img>
        </div>       
         
    </div>
)

export default Header;

import React from 'react'
import {NavLink} from "react-router-dom"
import AddEdit from './AddEdit';
import ListRecord from './index';
import './css/Header.css';

const Header = () => {
  return (
    <div className="fluid-container">
    <nav className="navbar navbar-expand-lg justify-content-center" style={{borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px"}}>

    <NavLink to="/" className="btn" style={{backgroundColor: "rgb(64,64,64)", color:"white", fontWeight:"bold", borderRadius:"10px"}}>
        Home
    </NavLink>

    <NavLink to="/add" className="btn" style={{backgroundColor: "rgb(64,64,64)", color:"white", fontWeight:"bold", borderRadius:"10px"}}>
        Add Your Data 
    </NavLink>

    <NavLink to="/about" className="btn" style={{backgroundColor: "rgb(64,64,64)", color:"white", fontWeight:"bold", borderRadius:"10px"}}>
        About Us
    </NavLink>

    </nav>
      
    </div>
  )
}

export default Header

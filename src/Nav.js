import React from "react";
import "./Nav.css"
import SearchIcon from "@material-ui/icons/Search"
import NavContents from "./NavContents";
import HomeIcon from "@material-ui/icons/Home"

function Nav(){
  return (
    <div className="nav_container">

      <div className="nav_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
        
        <div className="search_box">
         <SearchIcon/>
         <input  type="text" placeholder="Search"/> 
        </div>
        
      </div>
      <div className="nav_right">
        <NavContents Icon={HomeIcon} title="Home" />
        <NavContents Icon={HomeIcon} title="Home" />
        <NavContents Icon={HomeIcon} title="Home" />
        <NavContents Icon={HomeIcon} title="Home" />
        <NavContents Icon={HomeIcon} title="Home" />

      </div>
    
    </div>
    
  )
}
export default Nav;
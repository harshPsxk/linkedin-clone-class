import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        <img className="sidebar_image"
         src=""
         alt=""
         />
         <Avatar/>
         <h2>Harsh</h2>
         <p className="sidebar_email">harshPsingh@live.com</p>
         <div className="sidebar_post">
           <div className="sidebar_post1"><p>Who Viewed you</p><span className="sidebar_view">4321</
           span></div>
           <div className="sidebar_post1"><p>Who Viewed you</p><span className="sidebar_view">4321</span></div>
         </div>

      </div>
    </div>

  )

}

export default Sidebar;
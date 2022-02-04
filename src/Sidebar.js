import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) =>(<div className="sidebar_recentItem">
  <span className="sidebar_hash">#</span>
  <p>{topic}</p>
</div>)
    


  return (
    <div className="sidebar">
      <div className="sidebar_top">
      <img className="" src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png" alt=""/>
      <Avatar className="sidebar_avatar"/>
      <h2>Harsh Pratap</h2>
      <h4>harshPsingh@live.com</h4>
      </div>
      
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">23434</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statNumber">234</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('react js')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('design')}
        {recentItem('developer')}

      </div>
    
    </div>
  )

}

export default Sidebar;
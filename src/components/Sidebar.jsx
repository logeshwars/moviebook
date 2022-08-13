import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  return (
    <nav>
      <div className="sidebarHead">
        <img src="images/logo.png" alt=""></img>
        <span>Moive Book</span>
      </div>
      <div className="sidebarBody">
        <h3>MENU</h3>
        <ul>
          <li>
            <span>Discover</span>
          </li>
          <li>
            <span>Trending</span>
          </li>
          <li>
            <span>Liked</span>
          </li>
          <li>
            <span></span>
          </li>
          <li><span>Favorite</span></li>
        </ul>
      </div>
      <div></div>
      <div className='sidebarFooter'>
        <button>Log Out</button>
      </div>
    </nav>
  );
}

export default Sidebar
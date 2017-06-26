import React from 'react';
import { Link } from 'react-router-dom';


const UserNavDropdown = (props) => {
  return (
    <div className="user-nav-dropdown-container">
      <div className="user-nav-dropdown-arrow-up"></div>
      <ul className="user-nav-dropdown">
        <li className="user-nav-dropdown-row">
          <button onClick={() => props.logout()}>Logout</button>
        </li>
      </ul>
    </div>
  )
}

export default UserNavDropdown;

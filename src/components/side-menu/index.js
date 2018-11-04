import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

const SideMenu = ({ menuItems = [], isOpen = false, setIsOpen }) => {
  const menuStyle = {
    height: window.innerHeight,
    width: !isOpen ? 0 : "230px"
  };

  return (
    <div className="side-menu" style={menuStyle}>
      <button onClick={() => setIsOpen(!isOpen)} className="close-button">
        X
      </button>
      <ul>
        {menuItems.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className="menu-item">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;

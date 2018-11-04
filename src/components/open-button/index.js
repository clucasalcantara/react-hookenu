import React from "react";

import styles from "./styles.scss";

const OpenButton = ({ isOpen = false, setIsOpen }) => (
  <button
    style={{
      opacity: !isOpen ? 1 : 0
    }}
    onClick={() => setIsOpen(!isOpen)}
    className="open-button"
  >
    Open
  </button>
);

export default OpenButton;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import SideMenu from "./components/side-menu";
import OpenButton from "./components/open-button";

import "./styles.scss";

const menuItems = [
  {
    path: "/home",
    label: "Home"
  },
  {
    path: "/contact",
    label: "Contact"
  },
  {
    path: "/store",
    label: "Store"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <SideMenu menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      <OpenButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="content">
        <div>
          <h1>{`Our Hooked Side Menu is now ${
            isOpen ? "opened" : "closed"
          }!`}</h1>
          <h2>Press Open and See the Magic!</h2>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

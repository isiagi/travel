import React from "react";

import "./nav.css"

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="nav__container">
      <div className="nav__wrapper">
        <h1>Travel</h1>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

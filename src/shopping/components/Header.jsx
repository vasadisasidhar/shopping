import React from "react";

const Header = () => {
  return (
    <div className="headersection">
      <div className="left">
        <div className="title">
          <h2>VS SHOPPING MALL</h2>
        </div>
      </div>

      <div className="center">
        <ul>
          <li>Women</li>
          <li>Mean</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="right">
        <div className="signin">signin / signup</div>
        <div className="cart">cart </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import "./index.scss"
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>COURSE</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"}> ABOUT US </Link>
              </li>
              <li>
                <Link to={"/courses"}>COURSES</Link>
              </li>
              <li>
                <Link to={"/new"}>NEWS</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
              <li>
                <Link to={"/add-course"}>ADD COURSE</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>WISHLIST</Link>
              </li>
            </ul>
          </nav>
          </div>
          <div className="phone">
          <i className="fa-solid fa-phone-volume"></i>
          +43 4566 7788 2457
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

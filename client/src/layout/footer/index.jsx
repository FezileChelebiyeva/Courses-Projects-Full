import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className="footer">
          <div className="text">
          Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by <Link>Colorlib</Link>
          </div>
          <div className="icons">
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
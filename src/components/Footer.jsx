import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
  <footer>
    <div className="foot-pannel">
      <p>Back to top</p>
    </div>
    <div className="foot-pannel-2">
      <div className="containerr">
      <ul>
        <li className='head'>Get to Know Us</li>
        <li> Careers</li>
        <li>Blog</li>
        <li>About Amazon</li>
        <li> Investor Relations</li>
        <li>Amazon Devices</li>
        <li>Amazon Science</li>
      </ul>
      </div>
      <div className="container-2">
      <ul>
        <li className='head'>Make Money with Us</li> 
        <li> Sell products on Amazon</li>
        <li> Sell on Amazon Business</li>
        <li> Sell apps on Amazon</li>
        <li> Investor Relations</li>
        <li>Become an Affiliate</li>
        <li>Advertise Your Products</li>
        <li>Self-Publish with Us</li>
        <li>Host an Amazon Hub</li>
        <li>See More Make Money with Us</li>
      </ul>
      </div>
      <div className="container-3">
      <ul>
        <li className='head'>Amazon Payment Products</li> 
        <li>Amazon Business Card</li>
        <li>Shop with Points</li>
        <li> Sell apps on Amazon</li>
        <li>Reload Your Balance</li>
        <li>Become an Affiliate</li>
        <li>Amazon Currency Converter</li>
      </ul>
      </div>
      <div className="container-4">
        <ul>
          <li className='head'>Let Us Help You</li>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Amazon Assistant</li>
          <li>Help</li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className="foot-pannel-3">
    <div className="logoo"> </div>
    </div>
    <div className="foot-pannel-4">
        <div className='pages'>
          <Link to="/about">Conditions of use </Link>
          <Link to="/">Privacy Notes</Link>
          <Link>Your ads Privacy Choices</Link>
        </div>
        <div className="copyright">
        @ 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
    </div>
  </footer>
  );
};
export default Footer
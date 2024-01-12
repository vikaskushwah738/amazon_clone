import React from 'react'
import './Header.css'
//import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";
//import Logo from '../assets/logo.png'
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";
function Header() {
  return (
    <div>
      <div className="nav">
        <div className="nav-logo bord">
          <div className="logo">
          </div>
        </div>
        <div className="nav-address bord">
          <p className='add-first'>Deliver to</p>
          <div className="add-icon">
            <IoLocationOutline className='icon' />
            <p className='add-sec '>India</p>
          </div>
        </div>
        <div className="nav-search">
          <select className='search-select'>
            <option value="">All</option>
          </select>
          <input className='search-input' type="text" placeholder='Search Amazon' />
          <div className="search-icon">
            <CiSearch />
          </div>
        </div>
        <div className="flag bord">
          <div className='flag-icon'>
          <FaFlagUsa />
          </div>
         <select id="cars">
            <option >EN</option>
            <option >HN</option>
            <option >TLGU</option>
            <option >Audi</option>
          </select>
        </div>
        <div className="nav-singin bord">
          <p><span>Hello, sing in</span></p>
          <p className='nav-second'>Account & Lists</p>
        </div>
        <div className="nav-return bord">
          <p><span>Return</span></p>
          <p className="nav-second">& Orders</p>
        </div>
        <div className="nav-cart bord">
          <BsCart className='i' />
          <p> Cart </p>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------
--------------------------------------------------------------------------------- */}
      <div className='panel'>
        <div className="panel-all">
          <FaBars /> All
        </div>
        <div className="panel-ops">
          <p>Today's Deals</p>
          <p>Custer Services</p>
          <p>Registry</p>
          <p>Gift Card</p>
          <p>Sell</p>
        </div>
      
      </div>
    </div>
  )
}

export default Header

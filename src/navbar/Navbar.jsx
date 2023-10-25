import React, { useState } from 'react'
import "./navbar.css"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import {IoMdArrowDropdown} from "react-icons/io"
import {AiFillHome} from "react-icons/ai"
import {CgGames} from "react-icons/cg"
import {BiMoviePlay} from "react-icons/bi"
import {PiUserListFill} from "react-icons/pi"

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <>
    <nav className={scrolled ? "nav__scrolled" : "nav"}>
        <div className='navbar_left'>
            <img className='netflix__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='netflix'/>

            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className='navbar_right'>
            <div className='nav__desktop'>
            <AiOutlineSearch className='icon'/>
          <span>KID</span>
          <IoIosNotificationsOutline className='icon'/>
          
          
          <div className="profile">
          <IoMdArrowDropdown className='icon'/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
             </div>
            </div>
            </div>
       
            <div className='profile__image'>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          </div>
        </div>


        
    </nav>
    
    <div className='navbar__mobile'>
    <div> <AiFillHome className='ic home'/>Home</div>
    <div> <BiMoviePlay className='ic' />New & Hot</div>
    <div> <CgGames className='ic'/>Games</div>
    <div> <PiUserListFill className='ic'/>My List</div>
  </div>
  </>
  )
}

export default Navbar
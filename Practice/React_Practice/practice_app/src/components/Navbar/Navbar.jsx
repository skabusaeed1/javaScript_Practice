import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='div'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to={'/contact'}>Contact</NavLink>
      <NavLink exact to="/about">About</NavLink>
    </div>
  )
}

export default Navbar

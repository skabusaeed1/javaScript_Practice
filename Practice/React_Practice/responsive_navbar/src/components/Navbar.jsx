import React from 'react'
import {useState} from 'react'
import "./Navbar.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar = () => {

  const [mobile,setMobile]=useState(false)

  const handlebtn=()=>{
    setMobile(!mobile)
  }

  return (
    <div>
      <div className='container'>
      <nav className='navbar'>
      <div className='logo'>
      <h1 >Abusaeed</h1>
      </div>
       <ul className={mobile ? "new-ul-div" : "ul-div"}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Skills</li>
            <li>contact</li>
        </ul>
        <div className='mobile-btn-1'>
        <button className='btn-1' onClick={handlebtn}>{
          mobile ? <ImCross/> : <FaBars/>
        }</button>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar

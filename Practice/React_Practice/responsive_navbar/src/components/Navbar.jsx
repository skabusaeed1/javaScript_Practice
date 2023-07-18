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
      <div className='header'>
        <h1>Abusaeed</h1>
        <div className={mobile ?"nav-menu active" : 'nav-menu'}>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Contact</p>
          <p>Resume</p>
        </div>
        <div className='hamburger' onClick={handlebtn}>
          {
            mobile ? <ImCross/> : <FaBars/> 
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar

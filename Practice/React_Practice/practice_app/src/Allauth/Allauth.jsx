import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import Home from '../components/New/Home'
import Contact from '../components/New/Contact'
import About from '../components/New/About'

const Allauth = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home></Home>}/> 
        <Route path={"/contact"} element={<Contact></Contact>}/>
        <Route path={"/About"} element={<About></About>}/>
      </Routes>
    </div>
  )
}

export default Allauth

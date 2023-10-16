import React from 'react'
import './Theme.css'
import {useSelector,useDispatch} from 'react-redux'
import {handleTheme} from './actions'

const Theme = () => {
    const dispatch = useDispatch()
    const {theme} = useSelector((store)=>{
      return store
    })
  return (
    <div>
       <div className={theme=="light"? "light_theme":"dark_theme"}>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae fugiat enim consectetur nisi reiciendis. Quaerat inventore excepturi ipsa, reprehenderit sed, aliquid quasi, corrupti fugit facere illo quod rerum sequi?</h3>
       </div>
       <button onClick={()=>dispatch(handleTheme("light"))}>Switch to Light</button>
       <button onClick={()=>dispatch(handleTheme("dark"))}>Switch to Dark</button>
    </div>
  )
}

export default Theme

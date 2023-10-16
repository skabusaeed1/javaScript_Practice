import {CHANGE_THEME} from './actionTypes'

export const handleTheme=(payload)=>{
   return{
     type: CHANGE_THEME,
     payload: payload
   }
}
import {CHANGE_THEME} from './actionTypes'

var initialState={
    theme:"light"
}

export const reducer=(state=initialState,action)=>{
     switch(action.type){
        case CHANGE_THEME:{
            return {
                ...state,theme:action.payload
            }
        }
     }
     return state;
}
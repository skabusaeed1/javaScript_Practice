import {GET_TODO} from './actionTypes'

const initialState = {
    todo:["dfdf",'dfdf'],
}

const reducer=(state=initialState,action)=>{
   switch(action.type){
    case GET_TODO:{
        return {...state,todo:action.payload};
    }
   }
   return state;
}

export {reducer};
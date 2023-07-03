import {GET_TODO} from './actionTypes';

const getData=(payload)=>{
    return{
        type:GET_TODO,
        payload:payload
    }
}

export {getData} ;
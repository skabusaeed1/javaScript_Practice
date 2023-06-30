import {
  GET_TODO_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
} from "./actionTypes";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case GET_TODO_REQUEST:{
            return {...state,isLoading:true,isError:false};
        }
        case GET_TODOS_SUCCESS:{
            return {...state,isLoading:false,isError:false,todo:action.payload};
        }
        case GET_TODOS_ERROR:{
            return {...state,isLoading:false,isError:true};
        }
    }
    return state;
};

export {reducer};

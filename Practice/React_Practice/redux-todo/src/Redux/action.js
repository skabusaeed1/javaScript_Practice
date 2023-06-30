import {
  GET_TODO_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
} from "./actionTypes";

const requestAction = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const successAction = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: payload,
  };
};
const errorAction = () => {
    return{
        type:GET_TODOS_ERROR
    }
}

export {requestAction, successAction, errorAction}

import React from "react";
import Todoinput from "./Todoinput";
import TodoData from "./TodoData";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { requestAction, successAction, errorAction } from "../Redux/action";

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) => dispatch(successAction(res.data)))
      .catch((err) => dispatch(errorAction()));
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <Todoinput />
      <TodoData />
    </div>
  );
};

export default Todo;

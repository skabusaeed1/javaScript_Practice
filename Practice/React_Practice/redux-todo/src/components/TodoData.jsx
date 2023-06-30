import React from "react";
import { useSelector } from "react-redux";

const TodoData = () => {
  const { todo } = useSelector((store) => {
    return store;
  });
//   console.log(todo);
  return (
    <div>
      <h2>Todo List</h2>
      {todo.length > 0 &&
        todo.map((elem, index) => {
          return (
            <h4>
              {elem.title}-{elem.status == true ? "True" : "Fasle"}
            </h4>
          );
        })}
    </div>
  );
};

export default TodoData;

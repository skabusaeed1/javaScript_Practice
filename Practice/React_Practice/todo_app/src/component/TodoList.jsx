import React from 'react';
import {useSelector} from 'react-redux'
import {useState} from 'react'

const TodoList = () => {
    const [state,setState]=useState([])
    const { todo } = useSelector((store) => {
        return store;
      });
  return (
    <div>
      <h3>Todo List</h3>
      {todo.length > 0 && todo.map((elem, index) => {
          return (
            <h4>
              {elem}
            </h4>
          );
        })}
    </div>
  )
}

export default TodoList

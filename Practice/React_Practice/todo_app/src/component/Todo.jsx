import React from 'react'
import Todoinput from './Todoinput'
import TodoList from './TodoList'

const todo = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <Todoinput/>
      <TodoList/>
    </div>
  )
}

export default todo

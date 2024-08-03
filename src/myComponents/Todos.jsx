import React from 'react'
import TodoItem from '../myComponents/TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>TODOS-LIST</h3>
      {/* {prop.todo} */}
      <TodoItem todo={props.todos[0]}/>
    </div>
  )
}

export default Todos

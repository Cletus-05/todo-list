import './App.css'
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';
import React, { useState } from 'react';


function App() {

  const onDelete = (todo) =>{
    console.log("I am onDelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
    ));
  }


  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"go to the market",
      desc:"job must be done before 6pm"
    },
    {
      sno:2,
      title:"go to gym",
      desc:"job must be done before 6am"
    },
  ]);


  return (
    <>
      <Header title="MyTodos-List"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  )
}

export default App

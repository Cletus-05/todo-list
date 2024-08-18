import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';


function App() {

  const onDelete = (todo) =>{
    console.log("I am onDelete of todo",todo);
  }

  let todos = [
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
  ]


  return (
    <>
      <Header title="MyTodos-List"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  )
}

export default App

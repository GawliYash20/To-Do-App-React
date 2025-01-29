import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import HEROTodo from './Components/HEROTodo'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

const MainPage = () => {
  const [todos, setTodos] = useState([

  ]);



  // useEffect(() => {
  //   console.log("Todos changes", todos)
  // }, [todos]);


  const total_todos = todos.length;
  const todos_completed = todos.filter((todo) => todo?.is_completed === true).length;


  return (
    <div className=" flex-row h-screen">
      <Header />
      <HEROTodo total_tasks={total_todos} task_completed={todos_completed} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default MainPage

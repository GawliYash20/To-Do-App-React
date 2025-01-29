import React from 'react'
import { MdAdd } from "react-icons/md";


const Form = ({setTodos}) => {
  const handleSubmit = (e) => {
    e.preventDefault() // prevents the app from refreshing entirely
    const value = e.target.todo.value;
    setTodos((prevTodos) => [
      ...prevTodos, {title: value, id: self.crypto.randomUUID(), is_completed: false}
    ])
    e.target.reset() // reset the form
  }

  return (
    <form 
      className="flex justify-center gap-3 my-10" 
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo">
        <input 
          className="w-80 p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition"
          type="text" 
          name="todo"
          id="todo"
          placeholder="Write Your Task"
        />
      </label>
      <button 
        className="px-5 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
      >
        <span className="cursor-pointer"><MdAdd className='text-xl' /></span>
      </button>
    </form>
  )
}

export default Form

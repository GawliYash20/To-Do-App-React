import React from 'react'
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <header className="text-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-start gap-4">
        <LuListTodo className="text-4xl" />
        <h1 className="text-2xl font-bold tracking-wide">TO-DO</h1>
      </div>
    </header>
  )
}

export default Header

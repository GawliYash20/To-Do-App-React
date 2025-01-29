import React, { useEffect, useRef, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const Items = ({ item, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const complete_todo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
  };

  const delete_todo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== item.id)
    );
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length); // this selects the text
    }
  }, [editing]);

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <li id={item?.id} className="flex justify-between items-center border-2 border-gray-600 rounded-lg p-2">
      {editing ? (
        <form className="flex w-full" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo" className="flex w-full">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              className="w-full p-2 rounded-md border-2 border-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            className="checkbox text-green-700"
            onClick={complete_todo}
            checked={item.is_completed}
            readOnly
          />
          <p className={`text-xl ${item.is_completed ? "line-through" : ""}`}>
            {item?.title}
          </p>

          <div className="flex gap-3">
            <button className="cursor-pointer p-2 rounded-md hover:bg-gray-200 hover:text-black focus:outline-none" onClick={handleEdit}>
              <FiEdit2 />
            </button>
            <button className="cursor-pointer p-2 rounded-md hover:bg-red-400 hover:text-black focus:outline-none" onClick={delete_todo}>
              <RiDeleteBin6Line />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Items;

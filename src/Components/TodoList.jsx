import React from 'react';
import Items from './Items';

const TodoList = ({ todos, setTodos}) => {
  return (
    <div className="border border-gray-500 rounded-lg w-3/4 mx-auto mt-4 p-4 max-h-44 overflow-y-auto custom-scrollbar">
      <ol className="space-y-3">
        {todos && todos.length > 0 ? (
          todos.map((item) => <Items key={item?.id} item={item} setTodos={setTodos} />)
        ) : (
          <p className="text-gray-300 text-center py-2">Seems lonely here! What are you up to today?</p>
        )}
      </ol>
    </div>
  );
};

export default TodoList;

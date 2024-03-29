import React from 'react';
import type { Todos } from '@/app/types';
import ReportLinkButton from '../../components/reportLink'

async function TodoSsrPage() {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const todoList: Todos[] = await response.json();

  const doingList = todoList.filter((todo: Todos) => !todo.isDone);
  const doneList = todoList.filter((todo: Todos) => todo.isDone);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center"> 
        <ReportLinkButton />
      </div>
      <h2 className="text-xl font-bold my-4">Doing</h2>
      <ul>
      {doingList.map((todo: Todos) => (
          <li key={todo.id} className="bg-white bg-opacity-90 text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
           <div>
             <p className={`text-lg font-semibold ${todo.isDone ? "line-through" : ""}`}>{todo.title}</p>
             <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.content}</p>
           </div>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold my-4">Done</h2>
      <ul>
      {doneList.map((todo: Todos) => (
          <li key={todo.id} className="bg-white bg-opacity-70 text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
             <p className={`text-lg font-semibold ${todo.isDone ? "line-through" : ""}`}>{todo.title}</p>
             <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.content}</p>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSsrPage;
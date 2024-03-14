import React from 'react';
import type { Todos } from '@/app/types';

async function TodoSsrPage() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const result = await response.json(); // 결과를 result에 할당
  console.log("받아온 todo", result);

  // result에서 todosList를 추출하여 사용
  const doingList = result.todosList.filter((todo: Todos) => !todo.isDone);
  const doneList = result.todosList.filter((todo: Todos) => todo.isDone);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold my-4">Doing</h2>
      <ul>
      {doingList.map((todo: Todos) => (
          <li key={todo.id} className="bg-white text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{todo.title}</p>
              <p>{todo.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold my-4">Done</h2>
      <ul>
      {doneList.map((todo: Todos) => (
          <li key={todo.id} className="bg-white text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{todo.title}</p>
              <p>{todo.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSsrPage;
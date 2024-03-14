'use client';

import React from 'react';
import type { TodoList } from '@/app/types';

async function TodoSsrPage() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const todoList: TodoList[] = await response.json();
  console.log("받아온 todo", todoList)

  const doingList = todoList.filter(todo => !todo.isDone);
  const doneList = todoList.filter(todo => todo.isDone);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold my-4">Doing</h2>
      <ul>
      </ul>
      <h2 className="text-xl font-bold my-4">Done</h2>
      <ul>
  
      </ul>
    </div>
  );
}

export default TodoSsrPage;
"use client"

import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';
import React from 'react';

function TodoCsrPage() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoCsrPage;
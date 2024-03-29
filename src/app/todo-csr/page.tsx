"use client"

import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';
import React from 'react';
import ReportRouterButton from '@/components/reportRouter';

function TodoCsrPage() {
  return (
    <>
       <div className="flex justify-center"> 
        <ReportRouterButton />
      </div>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoCsrPage;
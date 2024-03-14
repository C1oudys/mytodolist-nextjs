'use client';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { TodoList, UpdateTodo } from '@/app/types';

export default function TodoList() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<TodoList>({
    queryKey: ['todos'],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/todos`);
        const { todosList } = await response.json();
        return todosList;
      } catch (error) {
        console.log(`데이터 불러오기 실패`);
        return [];
      }
    }
  }); 

  const toggleIsDoneHandler = (id: string, isDone: boolean) => {
    const updatedTodo = {
      id: id,
      isDone: !isDone
    };
    isDoneMutation.mutate(updatedTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
      }
    });
  };

  const isDoneMutation = useMutation({
    mutationFn: async (updatedTodo: UpdateTodo) => {
      try {
        await fetch(`http://localhost:3000/api/todos`, {
          method: 'PATCH',
          body: JSON.stringify({ id: updatedTodo.id, isDone: updatedTodo.isDone })
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  });

  const deleteMutation = () => {
    const { mutate: deleteMutate } = useMutation({
      mutationFn: async (id: string) => {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
    },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
      },
    });
    return deleteMutate;
  }

  const deleteMutate = deleteMutation();

  const handleDeleteConfirmation = (id: string) => {
    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteMutate(id);
      alert('삭제되었습니다. :)')
    }
  };
    
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Data Error.. Help..! {error.message}</div>;
  }
  if (!data) {
    return <div>No data found!</div>;
  }

  const doingList: TodoList = data.filter((todo) => !todo.isDone);
  const doneList: TodoList = data.filter((todo) => todo.isDone);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold my-4">Doing</h2>
      <ul>
        {doingList.map((todo) => (
           <li key={todo.id} className="bg-white bg-opacity-90 text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
           <input
             type="checkbox"
             checked={todo.isDone}
             onChange={() => toggleIsDoneHandler(todo.id, todo.isDone)}
             className="form-checkbox h-5 w-5 text-green-500 rounded mr-4"
           />
           <div>
             <p className={`text-lg font-semibold ${todo.isDone ? "line-through" : ""}`}>{todo.title}</p>
             <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.content}</p>
           </div>
           <button
             onClick={() => handleDeleteConfirmation(todo.id)}
             className="flex items-center bg-red-500 text-white px-2 py-1 rounded-full shadow hover:bg-red-600 transition duration-300 ml-auto"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
             삭제
           </button>
         </li>
       ))}
     </ul>
      <h2 className="text-xl font-bold my-4">Done</h2>
      <ul>
        {doneList.map((todo) => (
          <li key={todo.id} className="bg-white bg-opacity-70 text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDoneHandler(todo.id, todo.isDone)}
              className="form-checkbox h-5 w-5 text-green-500 rounded mr-4"
            />
            <div>
              <p className={`text-lg font-semibold ${todo.isDone ? "line-through" : ""}`}>{todo.title}</p>
              <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.content}</p>
            </div>
            <button
              onClick={() => handleDeleteConfirmation(todo.id)}
              className="flex items-center bg-red-500 text-white px-2 py-1 rounded-full shadow hover:bg-red-600 transition duration-300 ml-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TodoList } from '@/app/types';

export default function TodoList() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<TodoList>({
    queryKey: ['todos'],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/todos`);
        const { todosList } = await response.json();
        console.log(`불러온 데이터`, todosList);
        return todosList;
      } catch (error) {
        console.log(`데이터 불러오기 실패`);
        return [];
      }
    }
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'DELETE',
    });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  if ( isLoading ) {
    return <div>Loading...</div>
  }
  if ( error ) {
    return <div>Data Error.. Help..! {error.message}</div>;
  }
  if ( !data ) {
    return <div>No data found!</div>;
  }

  const doingList: TodoList = data.filter((item) => !item.isDone);
  const doneList: TodoList = data.filter((item) => item.isDone);

  return (
    <div>
    <h2>Doing</h2>
    <ul>
      {doingList.map((item) => (
        <li key={item.id}>
        {item.title}<br />{item.content}
        <button onClick={() => deleteTodoMutation.mutate(item.id)}>Delete</button>
      </li>
      ))}
    </ul>
    <h2>Done</h2>
    <ul>
      {doneList.map((item) => (
        <li key={item.id}>{item.title}<br />{item.content}</li>
      ))}
    </ul>
  </div>
  );
}
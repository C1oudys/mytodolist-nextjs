import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const newTodoMutation = useMutation({
    mutationFn: async (newTodo: { title: string; content: string; isDone: boolean,  }) => {
      const response = await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      return await response.json();
    },
    onSuccess: () => {
      // 쿼리 무효화로 할 일 목록 갱신
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기서 newTodo의 타입은 { title: string; content: string } 입니다.
    newTodoMutation.mutate({ title, content, isDone: false });
    setTitle('');
    setContent('');
  };

  return (
    <form className="flex flex-col space-y-4 items-center mt-5" onSubmit={handleSubmit}>
      <input
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

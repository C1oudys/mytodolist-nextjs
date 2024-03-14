import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent } from 'react';

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
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title || !content) {
      alert(`제목과 내용을 모두 입력해주세요.`);
      return;
    }
    if (!window.confirm(`할일을 등록하시겠습니까?`)) return;

    newTodoMutation.mutate({ title, content, isDone: false });
    setTitle('');
    setContent('');
  };

  return (
    <form className="flex flex-col space-y-4 items-center mt-5" onSubmit={handleSubmit}>
      <input
        className="w-2/4 p-2 border text-black rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Title"
        type="text"
        value={title}
        maxLength={30}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-2/4 p-2 border text-black rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Content"
        type="text"
        value={content}
        maxLength={40}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        추가하기
      </button>
    </form>
  );
}

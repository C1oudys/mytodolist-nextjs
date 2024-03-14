import React from 'react';
import { Todos } from '../types';

async function ReportPage() {
  const response = await fetch(`http://localhost:3000/api/todos`, { next: { revalidate: 10 } });
  const { todosList }: { todosList: Todos[] } = await response.json();
  const doingList = todosList.filter((item) => item.isDone === false);
  const doneList = todosList.filter((item) => item.isDone === true);

  return (
    <main className="h-screen flex flex-col justify-start pt-20"> 
  <article>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-3.5 text-center">할일 통계</h1>
      <p className="mt-3.5 leading-loose">
        현재 <span className="font-bold text-red-500">{todosList.length}개</span>의 할일이
        있습니다.
        <br />
        해야할 할일은 <span className="font-bold text-red-500">{doingList.length}개</span>, 끝낸 할일은{' '}
        <span className="font-bold text-red-500">{doneList.length}개</span>가 있습니다.
      </p>
    </div>
  </article>
</main>
 )
}

export default ReportPage;

import React from 'react';
import { Todos } from '../types';

async function ReportPage() {
  const response = await fetch(`http://localhost:4000/todos`, { next: { revalidate: 10 } });
  const todoList = await response.json();
  const doingList = todoList.filter((item: Todos) => item.isDone === false);
  const doneList = todoList.filter((item: Todos) => item.isDone === true);

  return (
    <main className="h-screen flex flex-col justify-start pt-20"> 
      <article>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-3.5 text-center">할일 통계</h1>
          <p className="mt-3.5 leading-loose">
            현재 <span className="font-bold text-red-500">{todoList.length}개</span>의 할일이
            있습니다.
            <br />
            해야할 할일은 <span className="font-bold text-red-500">{doingList.length}개</span>, 끝낸 할일은{' '}
            <span className="font-bold text-red-500">{doneList.length}개</span>가 있습니다.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMjA5MTRfMTgy/MDAxNjYzMDk5NDg1MDAx.J3Jo-hU1Hkq5E9ctKP4Y_Sjtv3J7dP_hQDmMfM4CCj8g.pP6jB0inpznQ_aQ51or-9YWyTHtbuTQ5T8gODdfmzl8g.JPEG.clf123/63bd59443ce948469834954c2b11a278%EF%BC%BF306054315%EF%BC%BF451453270266348%EF%BC%BF4587681661241988256%EF%BC%BFn.jpg?type=w800"
            alt="이제 할일을 하자"
            style={{ marginTop: '30px', borderRadius: '12px', width: '400px', display: 'block' }}
          />
        </div>
      </article>
    </main>
  );
}

export default ReportPage;

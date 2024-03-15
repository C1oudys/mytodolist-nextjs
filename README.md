# <div align="center"> My TodoList with Next.Js</div>
![Screen Shot 2024-03-15 at 3 02 06 PM](https://github.com/C1oudys/todolist-ts/assets/153264541/d5b47147-7020-4880-8aad-6d95a84136f9)
* * *  
개발 기간 : 2024.03.11 ~ 2024.03.15 

소개 : 할일을 작성하고 관리할수 있는 페이지 입니다.
* * *
## <div align="center">기술 스택</div>
<li>Next.js</li>
<li>Json-Server</li>
<li>Tanstack React-Query</li>
<li>TypeScript</li>
<li>Tailwind</li>

* * *
## <div align="center">시작 가이드</div>
* * *
```
npx json-server db.json --port 4000
npm run dev
```
* * *
## <div align="center">주요 기능</div>
* * *
<li>Home</li>
메인 페이지로 간단한 페이지 소개가 있습니다.
<br>
<li>About</li>  
SSR로 렌더링하는 회사 소개 페이지입니다.
<br>
<li>Report</li>  
Todos의 통계 정보를 ISR로 렌더링하는 페이지입니다.
매 10초마다 정보가 갱신돱니다.
<br>
<li>TODOS-CSR</li>  
Todo를 작성하고 관리할수 있는 페이지입니다.
CSR로 렌더링되며 Report 페이지로 이동 할수있는 할일 통계 보러가기 버튼이 존재합니다.
<br>
<li>TODOS-SSR</li> 
SSR로 렌더링되며 Todo 리스트를 볼수있는 페이지입니다.
Report 페이지로 이동 할수있는 할일 통계 보러가기 버튼이 존재합니다.
* * *  




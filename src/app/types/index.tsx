export type CompanyInfo = {
    name: string;
    description: string;
    image: string;
  };
  
  export type Todos = {
    id: string;
    title: string;
    content: string;
    isDone: boolean;
  };
  
  export type TodoList = Todos[];

import { Todos } from '@/app/types';

export async function GET(request: Request): Promise<Response> {
    try {
        const response = await fetch(`http://localhost:4000/todos`);
        const todosList: Todos[] = await response.json();

        if (!todosList || todosList.length === 0) {
            return new Response("Todo list is empty or not found :(", {
              status: 404,
            });
        }
        return new Response(JSON.stringify({todosList}), {
          status: 200
          });
    } catch (error) {
        console.error(`Error:`, error);
        return new Response("Server Error :(", {
            status: 500,
        });
    }
}

  export async function POST(request: Request): Promise<Response> {
    try {
        const {title, content} = await request.json(); 
        if (!title || !content) {
            return new Response(JSON.stringify({ error: 'Title and contents are required.' }), { status: 400 });
        }
        const response = await fetch(`http://localhost:4000/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, isDone: false }), 
        });
        const todoItem: Todos = await response.json();

        return new Response(JSON.stringify({ todoItem }), { status: 201 });
    } catch (error) {
        console.error(`Error:`, error);
        return new Response("Server Error :(", { status: 500 });
    }
}
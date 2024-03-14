export async function DELETE(request: Request): Promise<Response> {
    try {
      const { id } = await request.json();
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ id })
      });
  
      return new Response('Deleted!', { status: 204 });
    } catch (error) {
      console.error(`Error`, error);
      return new Response(`Server Error :(`, { status: 500 });
    }
  }

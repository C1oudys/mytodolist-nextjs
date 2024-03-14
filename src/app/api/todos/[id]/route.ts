export async function DELETE(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE'
    });

    return new Response('Deleted!', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Server', { status: 500 });
  }
}

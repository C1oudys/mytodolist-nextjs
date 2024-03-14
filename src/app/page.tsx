export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center">
      <video autoPlay loop muted src="/assets/justdovideo.mp4" style={{ marginTop: '30px', maxWidth: '100%', height: 'auto' }} />
      <br />
      <h1>Just Do!!</h1>
      <br />
      <h2>TodoList - Next.Js</h2>
    </main>
  );
}


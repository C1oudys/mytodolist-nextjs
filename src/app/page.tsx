export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <video autoPlay loop muted src="/assets/justdovideo.mp4" className="w-500 rounded-md shadow-lg" />
      <div className="mt-8 text-center">
        <h1 className="text-4xl text-white-500 font-bold">Just Do!!</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-600">TodoList - Next.Js</h2>
      </div>
    </main>
  );
}

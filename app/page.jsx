export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh_-_96px)] flex">
        <div className="w-[15%] h-full bg-red-200 text-center">
          <h1>Left Side</h1>
        </div>
        <div className="w-[85%] h-full bg-yellow-200 text-center">
          <h1>Right Side</h1>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const [count, setCount] = useState(0);


  return (
    <main className="mx-auto container min-h-screen min-w-80 place-items-center justify-center px-4 text-center flex ">
      <section>
        <div>
          <a href="https://vitejs.dev" target="_blank" className="inline-block">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="inline-block">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold leading-5">Vite + React</h1>
        <div className="p-8">
          <button
            className="btn inline-block"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-[#888]">
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComponent from "./ChildComponent";
import Button from "./Button";

interface User {
  name: string;
  age: number;
  email: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // api call
    setUser({ name: "nishant", age: 22, email: "@gmail.com" });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={count} setCount={setCount} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChildComponent name="nishant" age="3" />
      <div>
        {user?.name} {user?.age} {user?.email}
      </div>
    </>
  );
}

export default App;
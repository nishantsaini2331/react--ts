import type { JSX } from "react";

interface ButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Button({ count, setCount }: ButtonProps): JSX.Element {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default Button;

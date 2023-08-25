import { useState } from "react";
import { Wrapper } from "../wrapper/Wrapper";

export function Exercise4() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper title="Exercise 4">
      <p>You've clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Wrapper>
  );
}

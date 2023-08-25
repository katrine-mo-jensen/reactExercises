import { Wrapper } from "../wrapper/Wrapper";
import { jsonJokes } from "./jokes";

export function Exercise8() {
  return (
    <Wrapper title="Exercise 8">
      <div>
        {jsonJokes.map((item, index) => {
          return (
            <div key={item.id}>
              <h3>{item.setup}</h3>
              <p>{item.punchline}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

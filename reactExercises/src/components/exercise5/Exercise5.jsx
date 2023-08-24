import { Wrapper } from "../wrapper/Wrapper";

export function Exercise5() {
  const animalArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <Wrapper title="Exercise 5">
      <ul>
        {animalArray.map((animal, index) => {
          return <li key={index}>{animal}</li>;
        })}
      </ul>
    </Wrapper>
  );
}

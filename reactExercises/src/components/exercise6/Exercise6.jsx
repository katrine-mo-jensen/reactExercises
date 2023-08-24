import { Wrapper } from "../wrapper/Wrapper";
import { CreateList } from "./CreateList";

export function Exercise6() {
  const animalArray = ["🐕 dog", "🐈 cat", "🐤 chicken", "🐄 cow", "🐑 sheep", "🐎 horse"];
  return (
    <Wrapper title="Exercise 6">
      <CreateList list={animalArray} />
    </Wrapper>
  );
}

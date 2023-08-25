import { useState } from "react";
import { Wrapper } from "../wrapper/Wrapper";
import style from "../Exercise7/Exercise7.module.scss";

export function Exercise7() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  function alertUser() {
    alert("Hello " + firstName + " " + lastname + "!");
  }
  return (
    <Wrapper title="Exercise 7">
      <form>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First name"
          type="text"
        />
        <input
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last name"
          type="text"
        />
        <button onClick={alertUser} type="button">
          GREET ME
        </button>
      </form>
    </Wrapper>
  );
}

import style from "../exercise1/exercise1.module.scss";
import { Wrapper } from "../wrapper/Wrapper";

export function Exercise1() {
  return (
    <Wrapper title="Exercise 1">
      <div className={style.yellowBox}>
        <p>Hello, World!</p>
      </div>
    </Wrapper>
  );
}

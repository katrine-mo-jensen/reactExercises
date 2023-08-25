export function Card(props) {
  return (
    <div>
      <img src={props.src} />
      <p>
        Name: {props.name}
      </p>
      <p>Title: {props.title}</p>
      <p>Key skill: {props.keySkill}</p>
    </div>
  );
}

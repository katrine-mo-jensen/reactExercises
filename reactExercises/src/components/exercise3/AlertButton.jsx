export function AlertButton(props) {
  return (
    <>
      <button onClick={() => alert("You clicked on " + props.title)}>
        {props.title}
      </button>
    </>
  );
}

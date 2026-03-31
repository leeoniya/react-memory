let incr = x => x + 1;

function useRefState(thing) {
  const [, forceUpdate] = React.useReducer(incr, 0);

  const ref = React.useRef();

  ref.current ??= [
    thing,
    newThing => {
      if (newThing !== ref.current[0]) {
        ref.current[0] = newThing;
        forceUpdate();
      }
    }
  ];

  return ref.current;
}

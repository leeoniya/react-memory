let incr = x => x + 1;

function useRefState(thing) {
  const ref = React.useRef(thing);
  const [, forceUpdate] = React.useReducer(incr, 0);

  return [ref.current, newThing => {
    if (newThing !== ref.current) {
      ref.current = newThing;
      forceUpdate();
    }
  }];
}

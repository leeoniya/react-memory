let incr = x => x + 1;

function useRefState(thing) {
  const [, forceUpdate] = React.useReducer(incr, 0);

  const ref = React.useRef();
  ref.current ??= [
    // thing itself, cannot be passed or memo'd without incurring 2x memory
    thing,
    newThing => {
      if (newThing !== ref.current[0]) {
        ref.current[0] = newThing;
        forceUpdate();
      }
    }
  ];

  thing = null;

  return ref.current;
}

function useRefMemo(cb, deps) {
  const ref = React.useRef();
  ref.current ??= [
    deps,
    null, // state
  ];

  if (deps !== ref.current[0]) {
    for (let i = 0; i < deps.length; i++) {
      if (deps[i] !== ref.current[0][i]) {
        ref.current[1] = cb();
        break;
      }
    }
    ref.current[0] = deps;
  }

  return ref.current[1];
}

function useGetState(thing) {
  const [, forceUpdate] = React.useReducer(incr, 0);

  const _ref = React.useRef();
  _ref.current ??= thing;

  const ref = React.useRef();
  ref.current ??= [
    // thing getter, can be drilled and passed around without
    () => _ref.current,
    newThing => {
      if (newThing !== _ref.current) {
        _ref.current = newThing;
        forceUpdate();
      }
    }
  ];

  thing = null;

  return ref.current;
}

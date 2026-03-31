function App() {
  const data = React.useRef();

  const [, forceUpdate] = React.useReducer(incr, 0);

  const somth = React.useMemo(Math.random, [data.current]);

  // if (data) {
  //   setInterval(() => {
  //     setData(data);
  //   }, 100);
  // }

  return React.createElement("button", {
    onClick: () => {
      data.current = genFrames();
      forceUpdate();
    }
  }, somth);
}

let incr = x => x + 1;
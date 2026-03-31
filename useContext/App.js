const DataContext = React.createContext({
  data: null,
});

let incr = x => x + 1;

function App() {
  const [, forceUpdate] = React.useReducer(incr, 0);

  const data = React.useRef();

  // if (data) {
  //   setInterval(() => {
  //     setData(data);
  //   }, 100);
  // }

  return React.createElement(
    DataContext.Provider, { value: data.current },
      React.createElement(Button, {
        onClick: () => {
          data.current = genFrames(),
          forceUpdate();
        }
      }
    ),
  );
}

function Button({ onClick }) {
  const data = React.useContext(DataContext);

  return React.createElement("button", { onClick }, data ? data[0].fields[1].values[0] : 'No data!');
}

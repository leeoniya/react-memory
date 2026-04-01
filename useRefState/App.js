function App() {
  const [data, setData] = useRefState();

  // if (data) {
  //   setInterval(() => {
  //     setData(data);
  //   }, 100);
  // }

  return React.createElement("button", {
    onClick: () => {
      setData(genFrames())
    }
  }, data ? data[0].fields[1].values[0] : 'No data!');
}

// using a getter
function App2() {
  const [getData, setData] = useGetState();

  // if (getData()) {
  //   setInterval(() => {
  //     setData(getData());
  //   }, 100);
  // }

  return React.createElement("button", {
    onClick: () => {
      setData(genFrames())
    }
  }, getData() ? getData()[0].fields[1].values[0] : 'No data!');
}

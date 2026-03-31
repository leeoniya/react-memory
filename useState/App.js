function App() {
  const [data, setData] = React.useState();

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

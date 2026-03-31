import { update, component, createRoot, html } from "ivi";

function genData2() {
  const ts = Array(2_000);
  const vals = Array(2_000);

  for (let i = 0; i < 2_000; i++) {
    ts[i] = 1773554800346 + i;
    vals[i] = Math.random() * 100
  }

  const data = Array(2_000);

  for (let i = 0; i < 2_000; i++) {
    data[i] = [
      ts.slice(),
      vals.slice(),
    ];
  }

  return data;
}

type TimeSeriesData = [timestamp: number[], values: number[]];

const App = component((c) => {
  return (data: TimeSeriesData[]) => html`${data[0][1][0]}`;
});

const root = createRoot(document.getElementById('root')!);

function renderWithData() {
  update(root, App(genData2()));
}

renderWithData();

window.renderWithData = renderWithData;
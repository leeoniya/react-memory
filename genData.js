function genData() {
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

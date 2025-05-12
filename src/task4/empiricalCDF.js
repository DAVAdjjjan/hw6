function empiricalCDF(sample, xVals) {
  const sorted = [...sample].sort((a, b) => a - b);
  const n = sorted.length;

  let i = 0;
  const F = {};

  for (const x of xVals) {
    while (i < n && sorted[i] <= x) i++;
    F[x] = i / n;
  }
  return F;
}

module.exports = empiricalCDF;

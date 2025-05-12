function getExpected(intervals, maxSampleEl, len, lambda) {
  return intervals.map(({ min, max }) => {
    const Fmin = 1 - Math.exp(-lambda * min);
    const Fmax = max === maxSampleEl ? 1 : 1 - Math.exp(-lambda * max);

    return len * (Fmax - Fmin);
  });
}

module.exports = getExpected;

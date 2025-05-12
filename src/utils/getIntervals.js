function getIntervals(sample) {
  const intervals = [];

  const min = Math.min(...sample.data);
  const max = Math.max(...sample.data);
  const R = max - min;
  const intervalsCount = Math.ceil(1 + 3.222 * Math.log10(sample.len));
  const optimalIntervalLen = R / intervalsCount;

  let leftBound = min;
  for (let i = 0; i < intervalsCount; i++) {
    const rightBound =
      i + 1 !== intervalsCount ? leftBound + optimalIntervalLen : max;
    intervals.push({
      min: leftBound,
      max: rightBound,
      frequency: 0,
      name: `Інтервал № ${i + 1}`,
    });
    leftBound = rightBound;
  }

  return { intervals, max, intervalsCount };
}

module.exports = getIntervals;

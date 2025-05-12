function fillFreq(sampleData, intervals, max) {
  for (const el of sampleData) {
    for (let i = 0; i < intervals.length; i++) {
      const isLast = i === intervals.length - 1;
      if (
        (el >= intervals[i].min && el < intervals[i].max) ||
        (isLast && el === max)
      ) {
        intervals[i].frequency += 1;
        break;
      }
    }
  }
}

module.exports = fillFreq;

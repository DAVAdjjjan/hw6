const { ourSample } = require("../index");
const getExpected = require("./expected");
const getIntervals = require("../utils/getIntervals");
const fillFreq = require("../utils/fillFreq");
const print = require("./print");

const { jStat } = require("jStat");

const h0 = "вибірка має експоненційний розподіл";
const h1 = "вибірка не має експоненційного розподілу";

function statDistributionExponential(sample) {
  const { intervals, max, intervalsCount } = getIntervals(sample);
  fillFreq(sample.data, intervals, max);

  const lambda = 1 / sample.mean();

  const expected = getExpected(intervals, max, sample.len, lambda);

  let chi2 = 0;

  intervals.forEach(({ frequency }, i) => {
    if (expected[i] > 0) {
      chi2 += Math.pow(frequency - expected[i], 2) / expected[i];
    }
  });

  const df = intervalsCount - 1 - 1;
  const chi2Critical = jStat["chisquare"].inv(1 - sample.alpha, df);

  print(sample.alpha, chi2, chi2Critical, h0, h1, df, intervals, expected);
}

statDistributionExponential(ourSample);

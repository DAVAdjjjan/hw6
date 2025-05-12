const { ourSample } = require("../index");
const print = require("./print");
const getExpected = require("./expected");
const getIntervals = require("../utils/getIntervals");
const fillFreq = require("../utils/fillFreq");

const pkg = require("jStat");
const { jStat } = pkg;

const h0 = "вибірка має нормальний розподіл";
const h1 = "вибірка не має нормального розподілу";

const statDistribution = (sample) => {
  const { intervals, max, intervalsCount } = getIntervals(sample);

  fillFreq(sample.data, intervals, max);

  const [mean, std] = [sample.mean(), sample.std()];
  const expected = getExpected(intervals, sample, mean, std);

  let chi2 = 0;
  for (let i = 0; i < intervalsCount; i++) {
    if (expected[i] > 0) {
      chi2 += Math.pow(intervals[i].frequency - expected[i], 2) / expected[i];
    }
  }

  const df = intervalsCount - 1 - 2;
  const chi2Critical = jStat["chisquare"].inv(1 - sample.alpha, df);

  print(sample.alpha, chi2, chi2Critical, h0, h1, df, intervals, expected);
};

statDistribution(ourSample);

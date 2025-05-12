const { ourSample } = require("../index");
const getExpected = require("./getExpected");
const print = require("./print");

const pkg = require("jStat");
const { jStat } = pkg;

const h0 = "вибірка має біноміальний розподіл";
const h1 = "вибірка не має біноміального розподілу";

function statDistributionBinomial(sample) {
  const freq = {};
  for (const el of sample.data) {
    freq[el] = (freq[el] ?? 0) + 1;
  }

  const N = Math.max(...sample.data);

  const categories = Array.from({ length: N + 1 }, (_, k) => k);
  const observed = categories.map((k) => freq[k] ?? 0);

  const p = sample.mean() / N;

  const expected = getExpected(categories, sample.len, N, p);

  let chi2 = 0;
  for (let i = 0; i < categories.length; i++) {
    if (expected[i] > 0) {
      chi2 += Math.pow(observed[i] - expected[i], 2) / expected[i];
    }
  }

  const df = categories.length - 1 - 1;
  const chi2Critical = jStat["chisquare"].inv(1 - sample.alpha, df);

  print(
    sample.alpha,
    chi2,
    chi2Critical,
    h0,
    h1,
    df,
    categories,
    observed,
    expected,
  );
}

statDistributionBinomial(ourSample);

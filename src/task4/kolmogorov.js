const { ourSample, sampleFor4thTask } = require("../index");
const getKSCritical = require("./getKScritical");
const empiricalCDF = require("./empiricalCDF");
const print = require("./print");
const jStat = require("jStat");

const h0 = "математичні сподівання нормальних сукупностей рівні";
const h1 = "математичні сподівання нормальних сукупностей різні";

function ksStatistic(F1, F2, xVals) {
  return Math.max(...xVals.map((x) => Math.abs(F1[x] - F2[x])));
}

function kolmogorovTest(s1, s2, alpha) {
  const xVals = Array.from(new Set([...s1.data, ...s2.data])).sort(
    (a, b) => a - b,
  );
  const F1 = empiricalCDF(s1.data, xVals);
  const F2 = empiricalCDF(s2.data, xVals);

  const D = ksStatistic(F1, F2, xVals);
  const Dcrit = getKSCritical(alpha, s1.len, s2.len);

  print(s1, s2, D, Dcrit, h0, h1);
}

kolmogorovTest(ourSample, sampleFor4thTask, ourSample.alpha);

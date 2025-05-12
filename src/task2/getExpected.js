const pkg = require("jStat");
const { jStat } = pkg;

function getExpected(categories, len, N, p) {
  return categories.map((k) => len * jStat["binomial"].pdf(k, N, p));
}

module.exports = getExpected;

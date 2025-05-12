const data = require("../data/data");
const data4th = require("../data/dataFor4thTask");
const Sample = require("../data/sample");

const ourSample = new Sample(data);
const sampleFor4thTask = new Sample(data4th);
module.exports = { ourSample, sampleFor4thTask };

const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const { jStat } = require("jstat");
const fs = require("fs");
const configBuilder = require("../utils/plotConfigBuilder");
const { ourSample } = require("../index");

async function qqPlot(sample, filename) {
  const sorted = [...sample].sort((a, b) => a - b);
  const n = sorted.length;
  const quantiles = sorted.map((_, i) =>
    jStat["normal"].inv((i + 0.5) / n, 0, 1),
  );

  const chartCanvas = new ChartJSNodeCanvas({ width: 600, height: 600 });
  const config = configBuilder(quantiles, sorted);

  const image = await chartCanvas.renderToBuffer(config);
  fs.writeFileSync(filename, image);
}

qqPlot(ourSample.data, (filename = "qqplot.png"))
  .then(() => console.log("графік збережено в файл", filename))
  .catch((err) => console.log(err));

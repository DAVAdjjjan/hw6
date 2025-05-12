function plotConfigBuilder(quantiles, sorted) {
  return {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Спрямлююча діаграма",
          data: quantiles.map((z, i) => ({ x: z, y: sorted[i] })),
          pointRadius: 4,
        },
        {
          label: "ідеальна пряма",
          data: [
            { x: Math.min(...quantiles), y: Math.min(...sorted) },
            { x: Math.max(...quantiles), y: Math.max(...sorted) },
          ],
          type: "line",
        },
      ],
    },
    options: {
      plugins: {
        title: { display: true, text: "Спрямлююча діаграма (Q-Q Plot)" },
      },
      scales: {
        x: { title: { display: true, text: "Теоретичні квантилі (z)" } },
        y: { title: { display: true, text: "Спостереження (x)" } },
      },
    },
  };
}

module.exports = plotConfigBuilder;

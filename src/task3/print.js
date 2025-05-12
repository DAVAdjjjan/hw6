function print(alpha, chi2, chi2Critical, h0, h1, df, intervals, expected) {
  console.log(`рівень значущості: ${alpha}`);
  console.log(
    `\nСтатистика χ² = ${chi2.toFixed(4)}, ` +
      `критичне χ² = ${chi2Critical.toFixed(4)} (df = ${df})`,
  );
  console.log(
    chi2 < chi2Critical
      ? `\nH₀ приймається:\n${h0}`
      : `\nH₀ відхиляється:\n${h1}`,
  );

  console.log("\nІнтервали:");
  intervals.forEach(({ name, min, max, frequency }, i) => {
    console.log(
      `${name}: [${min.toFixed(3)} – ${max.toFixed(3)}], ` +
        `Емпірична: ${frequency}, Очікувана: ${expected[i].toFixed(2)}`,
    );
  });
}

module.exports = print;

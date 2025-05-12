function print(
  alpha,
  chi2,
  chi2Critical,
  h0,
  h1,
  df,
  categories,
  observed,
  expected,
) {
  console.log("рівень значущості:", alpha);
  console.log(
    `\nСтатистика χ² = ${chi2.toFixed(4)}, критичне χ² = ${chi2Critical.toFixed(4)} (df = ${df})`,
  );
  if (chi2 < chi2Critical) {
    console.log(`\nH₀ приймається:\n${h0}`);
  } else {
    console.log(`\nH₀ відхиляється:\n${h1}`);
  }

  console.log("\nk | емпірична | очікувана");
  categories.forEach((k, i) => {
    console.log(
      `${k.toString().padStart(2)} | ${observed[i]
        .toString()
        .padStart(9)} | ${expected[i].toFixed(2).padStart(9)}`,
    );
  });
}

module.exports = print;

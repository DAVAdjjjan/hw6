function print(s1, s2, D, Dcrit, h0, h1) {
  console.log(`α = ${s1.alpha}`);
  console.log(`D = ${D.toFixed(4)}, критичне D = ${Dcrit.toFixed(4)}`);

  if (D > Dcrit) {
    console.log(`H₀ відхиляється: ${h1}`);
  } else {
    console.log(`H₀ приймається: ${h0}`);
  }

  console.log(`\nМатематичне сподівання 1-ї вибірки: ${s1.mean().toFixed(2)}`);
  console.log(`Математичне сподівання 2-ї вибірки: ${s2.mean().toFixed(2)}\n`);
}

module.exports = print;

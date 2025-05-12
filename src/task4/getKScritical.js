function getKSCritical(alpha, n1, n2) {
  const K_alpha = {
    0.2: 1.07,
    0.1: 1.22,
    0.05: 1.36,
    0.01: 1.63,
  };
  const K = K_alpha[alpha.toFixed(2)];
  if (!K) throw new Error("Unsupported alpha");
  return K * Math.sqrt((n1 + n2) / (n1 * n2));
}

module.exports = getKSCritical;

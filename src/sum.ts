export const sum = (s: string): number => {
  let total = 0;
  const nums = s.split(",");

  nums.forEach((n) => {
    total += Number(n);
  });
  return total;
};

export const sum = (s: string): number => {
  let total = 0;
  let delimiter = ",";

  // check if first line starts with //*
  if (s.startsWith("//")) {
    delimiter = s[2];
    s = s.slice(3);
  }

  const re = new RegExp(`\\n|${delimiter}`, "g");
  const nums = s.split(re);
  const negativeNums = nums.filter((n) => Number(n) < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negatives not allowed - ${negativeNums.join(", ")}`);
  }

  nums.forEach((n) => {
    total += Number(n);
  });

  return total;
};

export const sum = (s: string): number => {
  let total = 0;
  let delimiter = ",";

  // check if first line starts with //*
  if (s.startsWith("//")) {
    if (s[2] === "[") {
      const endIndex = s.indexOf("]");
      delimiter = s.slice(3, endIndex);
      s = s.slice(endIndex + 1);
    } else {
      delimiter = s[2];
      s = s.slice(3);
    }
  }

  const re = new RegExp(`\\n|${delimiter}`, "g");
  const nums = s.split(re);
  const negativeNums = nums.filter((n) => Number(n) < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negatives not allowed - ${negativeNums.join(", ")}`);
  }

  nums.forEach((n) => {
    total += Number(n) <= 1000 ? Number(n) : 0;
  });

  return total;
};

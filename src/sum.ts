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

  nums.forEach((n) => {
    total += Number(n);
  });

  return total;
};

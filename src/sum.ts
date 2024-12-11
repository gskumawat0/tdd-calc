// https://osherove.com/tdd-kata-1/

export const sum = (s: string): number => {
  let total = 0;

  const nums: string[] = [];

  let startIndex = 0;
  if (s.startsWith("//")) {
    startIndex = s.indexOf("\n") + 1;
  }

  let n = "";

  while (startIndex < s.length) {
    // note: assuming delimiter doesn't have any numbers

    if (s[startIndex].match(/\d/) || (s[startIndex] === "-" && n === "")) {
      n += s[startIndex];
    } else {
      nums.push(n);
      n = "";
    }

    startIndex += 1;
  }

  if (n) nums.push(n);

  const negativeNums = nums.filter((n) => Number(n) < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negatives not allowed - ${negativeNums.join(", ")}`);
  }

  nums.forEach((n) => {
    total += Number(n) <= 1000 ? Number(n) : 0;
  });

  return total;
};

export const getDelimiter = (s: string): Set<string> => {
  const delimiters = new Set([",", "\n"]);

  if (s.startsWith("//")) {
    let i = 2;

    while (s[i] === "[") {
      const endIndex = s.indexOf("]", i + 1);
      delimiters.add(s.slice(i + 1, endIndex));
      i = endIndex + 1;
    }
  }
  return delimiters;
};

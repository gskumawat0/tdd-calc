import { sum } from "../src/sum";

describe("sum", () => {
  it("should return 2", () => {
    expect(sum("1,1")).toBe(2);
  });
});

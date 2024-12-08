import { sum } from "../src/sum";

describe("sum", () => {
  it("should return sum of two numbers", () => {
    expect(sum("1,1")).toBe(2);
  });

  it("should return 0 for empty string", () => {
    expect(sum("")).toBe(0);
  });

  it("should return same input if delimiter is not found", () => {
    expect(sum("1")).toBe(1);
  });

  it("should return sum for multiple numbers", () => {
    expect(sum("1,3,4,5")).toBe(13);
  });

  it("should return sum with multiple delimiters", () => {
    expect(sum("1,3\n4,5")).toBe(13);
  });

  it("should return sum with dynamic delimiters ';'", () => {
    expect(sum("//;\n1;3;4;5")).toBe(13);
  });

  it("should return sum with dynamic delimiters ':'", () => {
    expect(sum("//:\n1:3:4:5")).toBe(13);
  });

  it("should thow error for negative numbers", () => {
    expect(() => sum("//,\n1,3,-4,5")).toThrow("negatives not allowed - -4");
  });

  it("should not thow error for positive numbers", () => {
    expect(() => sum("//,\n1,3,4,5")).not.toThrow("negatives not allowed - -4");
  });

  it("should ignore nums greater than 1000", () => {
    expect(sum("//,\n1,3,4,5,1001")).toBe(13);
  });

  it("should include 1000 in sum", () => {
    expect(sum("//,\n1,3,4,5,1000")).toBe(1013);
  });

  it("should return sum with dynamic delimiters with length > 1 ';;;'", () => {
    expect(sum("//[;;;]\n1;;;3;;;4;;;5;;;1000")).toBe(1013);
  });
});

const { expect } = require("@jest/globals");
const dl = require("./dates.js");

test("Testing Get Full Year", () => {
  const d = new dl.D(1900, 0, 1);
  const d2 = new dl.D(2100, 0, 1);
  const d3 = new dl.D(2200, 2, 3);
  expect(d.year).toBe(1900);
  expect(d2.year).toBe(2100);
  expect(d3.year).toBe(2200);
});

test("Testing Get Month", () => {
  const d = new dl.D(2020, 0, 1);
  const d2 = new dl.D(2019, 1, 1);
  const d3 = new dl.D(2020, 2, 3);
  expect(d.month).toBe(0);
  expect(d2.month).toBe(1);
  expect(d3.month).toBe(2);
});

test("Testing get Day", () => {
  const d = new dl.D(2020, 0, 1);
  const d2 = new dl.D(2019, 3, 2);
  const d3 = new dl.D(2020, 4, 3);
  expect(d.day).toBe(1);
  expect(d2.day).toBe(2);
  expect(d3.day).toBe(3);
});

test("Testing get hour", () => {
  const d = new dl.D(2017, 0, 2, 1, 4, 5);
  const d2 = new dl.D(2019, 0, 2, 2, 4, 5);
  const d3 = new dl.D(2020, 0, 2, 3, 4, 5);
  expect(d.hour).toBe(1);
  expect(d2.hour).toBe(2);
  expect(d3.hour).toBe(3);
});

test("Testing get minutes", () => {
  const d = new dl.D(2017, 0, 2, 3, 1, 5);
  const d2 = new dl.D(2019, 0, 2, 7, 2, 5);
  const d3 = new dl.D(2020, 0, 2, 12, 3, 5);
  expect(d.min).toBe(1);
  expect(d2.min).toBe(2);
  expect(d3.min).toBe(3);
});

test("Testing get secs", () => {
  const d = new dl.D(2017, 0, 2, 3, 4, 1);
  const d2 = new dl.D(2019, 0, 2, 7, 4, 2);
  const d3 = new dl.D(2020, 0, 2, 12, 4, 3);
  expect(d.secs).toBe(1);
  expect(d2.secs).toBe(2);
  expect(d3.secs).toBe(3);
});

test("Testing format", () => {
  const d = new dl.D(2017, 1, 2, 3, 4, 45);
  expect(d.format()).toBe("2017 February 2");
  expect(d.format("y/m/d")).toBe("17/Feb/2");
  expect(d.format("H:I:S")).toBe("03:04:45");
  expect(d.format("h:i:s")).toBe("3:4:45");
  expect(d.format("Y-M-D h:I:S")).toBe("2017-February-2 3:04:45");
});
const dateLib = require("./dates.js");

test("Testing Get Full Year", () => {
    const d = new dateLib.D(2020, 0, 1);
    const d2 = new dateLib.D(2019, 0, 1);
    const d3 = new dateLib.D(2020, 2, 3);
    expect(d.year).toBe(2020);
    expect(d2.year).toBe(2019);
    expect(d3.year).toBe(2020);
});

test("Testing Get Month", () => {
    const d = new dateLib.D(2020, 0, 1);
    const d2 = new dateLib.D(2019, 3, 1);
    const d3 = new dateLib.D(2020, 4, 3);
    expect(d.months_abrv).toBe(0);
    expect(d.months_abrv).toBe(0);
    expect(d2.months_abrv).toBe(3);
    expect(d3.months_abrv).toBe(4);
});

test("Testing get Day", () => {
    const d = new dateLib.D(2020, 0, 1);
    const d2 = new dateLib.D(2019, 3, 25);
    const d3 = new dateLib.D(2020, 4, 3);
    expect(d.day).toBe(1);
    expect(d2.day).toBe(25);
    expect(d3.day).toBe(3);
});

test("Testing get hour", () => {
    const d = new dateLib.D(2017, 0, 2, 3, 4, 5);
    const d2 = new dateLib.D(2019, 0, 2, 7, 4, 5);
    const d3 = new dateLib.D(2020, 0, 2, 12, 4, 5);
    expect(d.hour).toBe(3);
    expect(d2.hour).toBe(7);
    expect(d3.hour).toBe(12);
});

test("Testing get minutes", () => {
    const d = new dateLib.D(2017, 0, 2, 3, 4, 5);
    const d2 = new dateLib.D(2019, 0, 2, 7, 45, 5);
    const d3 = new dateLib.D(2020, 0, 2, 12, 30, 5);
    expect(d.min).toBe(4);
    expect(d2.min).toBe(45);
    expect(d3.min).toBe(30);
});

test("Testing get secs", () => {
    const d = new dateLib.D(2017, 0, 2, 3, 4, 45);
    const d2 = new dateLib.D(2019, 0, 2, 7, 4, 25);
    const d3 = new dateLib.D(2020, 0, 2, 12, 4, 15);
    expect(d.secs).toBe(45);
    expect(d2.secs).toBe(25);
    expect(d3.secs).toBe(15);
});

test("Testing format", () => {
    const d = new dateLib.D(2017, 0, 2, 3, 4, 45);
    expect(d.format()).toBe("2017 January 2");
    expect(d.format("y/m/d")).toBe("17/Jan/2");
    expect(d.format("H:I:S")).toBe("03:04:45");
    expect(d.format("h:i:s")).toBe("3:4:45");
    expect(d.format("Y-M-D h:I:S")).toBe("2017-January-2 3:04:45");
});
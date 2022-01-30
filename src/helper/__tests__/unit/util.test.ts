import * as util from "../../util";

describe("fromRedditData()", () => {
  it("should convert keys to camel case", () => {
    const a = { foo_bar: "a", bar_foo: "b" };
    const b = { fooBar: "a", barFoo: "b" };

    expect(util.fromRedditData(a)).toStrictEqual(b);
  });

  it("should preserve camel cased keys", () => {
    const a = { fooBar: "a", barFoo: "b" };
    const b = { fooBar: "a", barFoo: "b" };

    expect(util.fromRedditData(a)).toStrictEqual(b);
  });

  it("should replace null with undefined", () => {
    const a = { fooBar: null, barFoo: undefined };
    const b = { fooBar: undefined, barFoo: undefined };

    expect(util.fromRedditData(a)).toStrictEqual(b);
  });
});
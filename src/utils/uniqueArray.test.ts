import { createUniqueArray } from "./uniqueArray";

describe("createUniqueArray", () => {
  it("names", () => {
    expect(
      createUniqueArray(
        [
          { user: "Vasya", username: "ormina" },
          { user: "Vasya", username: "ormina" },
          { user: "Masha", username: " targe" },
          { user: "Sasha", username: "qwerty" },
          { user: "Sasha", username: "qwerty" },
        ],
        "user"
      )
    ).toStrictEqual(["Vasya", "Masha", "Sasha"]);
  });
  it("empty", () => {
    expect(
      createUniqueArray(
        [],
        "user"
      )
    ).toStrictEqual([]);
  });
  it("notArray", () => {
    expect(
      createUniqueArray(
       [1,2,3],
        "1"
      )
    ).toStrictEqual(['undefined']);
  });
});

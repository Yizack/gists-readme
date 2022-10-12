import { wrapDescription } from "./../src/functions.js";

describe("wrapDescription", () => {
  test("should wrap description", () => {
    let description = wrapDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 60);

    expect(description).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</tspan><tspan dy=\"1.2em\" x=\"25\">do eiusmod tempor incididunt ut labore et dolore magna</tspan><tspan dy=\"1.2em\" x=\"25\">aliqua. Ut enim ad minim veniam, quis nostrud exercitation</tspan><tspan dy=\"1.2em\" x=\"25\">ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    
    expect((description.match(/dy/g) || []).length).toBe(3);
  });
});

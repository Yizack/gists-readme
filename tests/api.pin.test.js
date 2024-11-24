import { describe, it, expect, vi } from "vitest";
import handler from "./../api/pin.js";

describe("render pin", () => {
  it("should render pin", async () => {
    const res = {
      setHeader: vi.fn(),
      status: vi.fn().mockReturnThis(),
      send: vi.fn()
    };
    await handler({ query: {} }, res);
    expect(res.setHeader).toHaveBeenCalledWith("Cache-Control", "max-age=0, s-maxage=14400");
    expect(res.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });
});

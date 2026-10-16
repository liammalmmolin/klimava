import { describe, expect, it } from "vitest";
import { assetUrl } from "../lib/asset-url";
import consumption from "../assets/sweden-upload-consumption-960.webp.asset.json";
import subway from "../assets/sweden-upload-subway-960.webp.asset.json";
import recycling from "../assets/sweden-upload-recycling-desktop.webp.asset.json";

describe("externally hosted tile photographs", () => {
  it.each([consumption, subway, recycling])("resolves $original_filename against the media host, not the website host", (asset) => {
    const resolved = new URL(assetUrl(asset), "https://klimava.se");
    expect(resolved.origin).toBe("https://klimava.lovable.app");
    expect(resolved.pathname).toBe(asset.url);
  });

  it("preserves other asset URLs", () => {
    expect(assetUrl({ url: "https://example.com/image.webp" })).toBe("https://example.com/image.webp");
    expect(assetUrl({ url: "/images/local.webp" })).toBe("/images/local.webp");
  });
});
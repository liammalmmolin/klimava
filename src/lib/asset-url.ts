/** Lovable's media route is not provided by external hosts such as GitHub Pages. */
const assetOrigin = "https://klimava.lovable.app";

export const assetUrl = (asset: { url: string }): string =>
  asset.url.startsWith("/__l5e/assets-v1/")
    ? new URL(asset.url, assetOrigin).href
    : asset.url;
import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";
const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

};

export default withSerwist(nextConfig);
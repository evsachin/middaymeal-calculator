import type { NextConfig } from "next";
// @ts-ignore
import withPWA from "next-pwa"
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack:{},
  output:"standalone",
  
};





export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",  // 👈 IMPORTANT
})(nextConfig);




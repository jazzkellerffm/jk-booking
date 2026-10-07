import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets phones on the local network load the dev server via the
  // Mac's LAN IP or Bonjour name. Without it, Next blocks the HMR socket from
  // non-localhost origins and the page never hydrates (no scroll-spy, no
  // header theme switching, no accordions).
  allowedDevOrigins: ["192.168.*.*", "*.local"],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/handbook", destination: "/handbook.html" },
      { source: "/film", destination: "/film.html" },
      { source: "/film-storm", destination: "/film-storm.html" },
    ];
  },
};

export default nextConfig;
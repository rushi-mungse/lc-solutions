import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },

  async redirects() {
    return [
      {
        source: "/problems",
        destination: "/problems/two-sum",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "standalone",

  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
  },

  async rewrites() {
    return [
      {
        source: "/ce/docs",
        destination: "/ce/docs/index.html",
        locale: false,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: !["1", "true"].includes(process.env.ENABLE_ESLINT),
  },

  typescript: {
    ignoreBuildErrors: !["1", "true"].includes(process.env.ENABLE_TYPESCRIPT),
  },
};

export default nextConfig;

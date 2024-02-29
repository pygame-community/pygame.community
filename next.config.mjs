/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/ce/docs",
  //       destination: "/ce/docs/index.html",
  //       locale: false,
  //     },
  //   ];
  // },
};

export default nextConfig;

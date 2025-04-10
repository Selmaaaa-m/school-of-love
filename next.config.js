module.exports = {
  images: {
    domains: ['your-domain.com', 'storage.c2.liara.space'], // Include your external image domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms-bucket-hadirasouli.storage.c2.liara.space",
        port: "",
        pathname: "/**", // Match all paths under the domain
      },
    ],
  },
  transpilePackages: ['gsap'], // Keep this unchanged
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, // Keep environment variables intact
  },
};

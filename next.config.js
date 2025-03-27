module.exports = {
  images: {
    domains: ['your-domain.com'], // Ensure your domain is listed if using external images
  },
  transpilePackages: ['gsap'],
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    remotePatterns: [
      //(https://cms-bucket-hadirasouli.storage.c2.liara.space/1740559364185-gallery)
      {
        protocol: "https",
        hostname: "cms-bucket-hadirasouli.storage.c2.liara.space",
        port: "",
        pathname: "/**",
      },
    ],
  },
};



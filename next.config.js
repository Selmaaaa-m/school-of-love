module.exports = {
  images: {
    domains: ['your-domain.com'], // Ensure your domain is listed if using external images
  },
};

const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
  // Other configurations...
});

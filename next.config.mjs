/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.innovamalpo.cl",
        port: "",       
      },
    ],
  },
};

export default nextConfig;

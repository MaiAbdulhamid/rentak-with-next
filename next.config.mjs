import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csb10032002912fe08a.blob.core.windows.net",
        port: "",
        pathname: "/transferimages/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

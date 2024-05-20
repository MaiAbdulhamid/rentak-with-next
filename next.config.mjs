import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["csb10032002912fe08a.blob.core.windows.net"],
  },
};

export default withNextIntl(nextConfig);

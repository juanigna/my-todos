/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'tailus.io'
            },
            {
                protocol: "https",
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    },
};

export default nextConfig;

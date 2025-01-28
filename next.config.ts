import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/space-x-launches-app",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "spacex-production.up.railway.app",
				port: "",
				pathname: "",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"cdn.example.com",
			"images.unsplash.com",
			"images.foodgraph.com",
			"s3.amazonaws.com",
			"images.seeklogo.com",
			"1000logos.net",
			"upload.wikimedia.org",
		],
	},
};

export default nextConfig;

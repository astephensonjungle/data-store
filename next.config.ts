import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.example.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.foodgraph.com",
			},
			{
				protocol: "https",
				hostname: "s3.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "images.seeklogo.com",
			},
			{
				protocol: "https",
				hostname: "1000logos.net",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: "https",
				hostname: "**.public.blob.vercel-storage.com",
			},
		],
	},
};

export default nextConfig;

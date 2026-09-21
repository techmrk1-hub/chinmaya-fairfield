import type { NextConfig } from "next";

const usingGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

if (usingGitHubPages && repoName && !process.env.NEXT_PUBLIC_BASE_PATH) {
  process.env.NEXT_PUBLIC_BASE_PATH = `/${repoName}`;
}

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (usingGitHubPages && repoName ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  trailingSlash: usingGitHubPages,
  images: {
    unoptimized: usingGitHubPages,
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "docs.google.com" },
      { protocol: "https", hostname: "chinmayafairfield.org" },
    ],
  },
};

if (usingGitHubPages) {
  nextConfig.output = "export";
}

if (basePath) {
  nextConfig.basePath = basePath;
  nextConfig.assetPrefix = basePath;
}

export default nextConfig;

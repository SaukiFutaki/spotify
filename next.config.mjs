/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'mosaic.scdn.co',
      }, {
        hostname: 'blend-playlist-covers.spotifycdn.com',
      }, {
        hostname: "wrapped-images.spotifycdn.com"
      }, {
        hostname: "image-cdn-ak.spotifycdn.com"
      }, {
        hostname: "image-cdn-fa.spotifycdn.com"

      }, {
        hostname: "i.scdn.co"
      }, {
        hostname: "pl.scdn.co"
      }, {
        hostname: "i.scdn.co"
      }, {
        hostname: "p"
      }
    ],
  }
};

export default nextConfig;

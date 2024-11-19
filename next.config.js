/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      }
    ]
  },
  env: {
    BASE_URL: "https://blog-app-five-delta-85.vercel.app/", // Add your domain here
  }
}

module.exports = nextConfig

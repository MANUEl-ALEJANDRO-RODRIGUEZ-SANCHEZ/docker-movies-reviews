/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          pathname: '/t/p/**', // esto cubre todas las imágenes del dominio
        },
      ],
    },
  };
  
  export default nextConfig;
  
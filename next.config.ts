import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['motion', 'lucide-react', 'react-icons'],
  },
  
  // Compression and optimization
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        motion: {
          name: 'motion',
          test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        icons: {
          name: 'icons',
          test: /[\\/]node_modules[\\/](lucide-react|react-icons)[\\/]/,
          chunks: 'all',
          priority: 9,
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;

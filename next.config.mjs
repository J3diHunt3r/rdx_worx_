// Import next-pwa package using ES module syntax
import withPWAInit from 'next-pwa';

// Initialize the PWA plugin with the required configuration
const withPWA = withPWAInit({
  dest: 'public', // Destination for service worker and other PWA files
});

// Export the configuration with next-pwa enabled
export default withPWA({
  // Your Next.js config options
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development', // Remove console logs in production
  },

  // Additional PWA-specific config options
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Disable in development mode
    register: true, // Automatically register the service worker
  },
});

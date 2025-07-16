import { useEffect, useState } from 'react';

/**
 * Custom hook to check if the component is mounted on the client side
 * Prevents hydration mismatches by ensuring consistent SSR/CSR behavior
 */
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

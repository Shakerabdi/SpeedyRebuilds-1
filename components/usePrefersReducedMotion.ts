import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Keep the server and the first browser render identical. Start with visible,
// motion-free content, then enable animation after checking the user's setting.
export default function usePrefersReducedMotion() {
  const preference = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return !hydrated || preference !== false;
}

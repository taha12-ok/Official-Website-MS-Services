import { useCallback, useSyncExternalStore } from 'react';

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 *
 * Implemented with useSyncExternalStore (no useState / useEffect) so the
 * scroll state is read consistently during render and stays in sync with the
 * browser's scroll position, including on hydration.
 */
export function useIsScrolled(threshold = 24): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener('scroll', onChange, { passive: true });
    return () => window.removeEventListener('scroll', onChange);
  }, []);

  const getSnapshot = useCallback(
    () => (typeof window !== 'undefined' ? window.scrollY > threshold : false),
    [threshold],
  );

  // Server snapshot: always "not scrolled" so SSR markup matches initial load.
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useIsScrolled;

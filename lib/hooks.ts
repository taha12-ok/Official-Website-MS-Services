"use client"
import { useCallback, useSyncExternalStore } from 'react';

export function useIsScrolled(threshold = 24): boolean {
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener('scroll', onStoreChange, { passive: true });
    return () => window.removeEventListener('scroll', onStoreChange);
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.scrollY > threshold;
  }, [threshold]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

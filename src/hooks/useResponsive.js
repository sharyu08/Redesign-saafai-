"use client";

import { useEffect, useState } from "react";

/**
 * useResponsive
 * Returns { isMobile, isTablet, isDesktop, width }
 * Safe: uses window only inside effects.
 */
export function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width <= 767,
    isTablet: width >= 768 && width <= 1023,
    isDesktop: width >= 1024,
  };
}

export function useMobileView() {
  const { isMobile } = useResponsive();
  return isMobile;
}

export function useDesktopView() {
  const { isDesktop } = useResponsive();
  return isDesktop;
}

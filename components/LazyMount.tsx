"use client";

import { useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: React.ReactNode;
  className?: string;
  fallback: React.ReactNode;
  idle?: boolean;
  rootMargin?: string;
};

type WindowWithIdleCallback = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: () => void) => number;
    cancelIdleCallback?: (id: number) => void;
  };

export default function LazyMount({
  children,
  className,
  fallback,
  idle = false,
  rootMargin = "200px",
}: LazyMountProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      return;
    }

    if (idle) {
      const currentWindow = window as WindowWithIdleCallback;
      const fallbackTimeout = window.setTimeout(() => setShouldRender(true), 1200);

      if (typeof currentWindow.requestIdleCallback === "function") {
        const idleId = currentWindow.requestIdleCallback(() => {
          window.clearTimeout(fallbackTimeout);
          setShouldRender(true);
        });

        return () => {
          window.clearTimeout(fallbackTimeout);
          currentWindow.cancelIdleCallback?.(idleId);
        };
      }

      return () => {
        window.clearTimeout(fallbackTimeout);
      };
    }

    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [idle, rootMargin, shouldRender]);

  return <div ref={containerRef} className={className}>{shouldRender ? children : fallback}</div>;
}

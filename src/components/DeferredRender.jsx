import { useEffect, useRef, useState } from "react";

export default function DeferredRender({ children, rootMargin = "600px" }) {
  const [enabled, setEnabled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (enabled) return;
    const el = sentinelRef.current;
    if (!el) {
      setEnabled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, rootMargin]);

  if (!enabled) return <div ref={sentinelRef} />;
  return <>{children}</>;
}


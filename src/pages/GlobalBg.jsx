// src/components/GlobeBackground.jsx
import React, { useEffect, useRef, useState } from "react";

export default function GlobeBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!window.VANTA || !window.THREE) return;

    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x385381,
          color2: 0x0dd95f,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}

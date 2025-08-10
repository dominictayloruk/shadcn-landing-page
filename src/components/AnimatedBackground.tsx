'use client';

import { useEffect, useRef } from 'react';
import { NeatGradient, NeatConfig } from '@firecms/neat';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const neatConfig: NeatConfig = {
  colors: [
    {
      color: '#22c55e', // Primary green (light mode)
      enabled: true,
    },
    {
      color: '#16a34a', // Darker green variant
      enabled: true,
    },
    {
      color: '#15803d', // Even darker green
      enabled: true,
    },
    {
      color: '#166534', // Dark green (dark mode primary)
      enabled: true,
    },
    {
      color: '#14532d', // Deepest green
      enabled: true,
    },
  ],
  speed: 2,
  horizontalPressure: 2,
  verticalPressure: 5,
  waveFrequencyX: 2,
  waveFrequencyY: 2,
  waveAmplitude: 7,
  shadows: 10,
  highlights: 8,
  colorBrightness: 1,
  colorSaturation: 10,
  wireframe: true,
  colorBlending: 7,
  backgroundColor: '#000000',
  backgroundAlpha: 1,
  grainScale: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 0.95,
};

export function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const neatEffect = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!neatEffect.current && canvasRef.current) {
      neatEffect.current = new NeatGradient({
        ref: canvasRef.current,
        ...neatConfig,
      });
    }

    return () => {
      if (neatEffect.current) {
        neatEffect.current.destroy();
        neatEffect.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      {children}
    </div>
  );
}

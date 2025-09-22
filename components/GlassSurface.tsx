'use client';

import React from 'react';

/**
 * Props for the Glass Surface component - enhanced for hibrit-glass compatibility.
 */
interface GlassSurfaceProps {
  /** Content to display inside the glass surface */
  children?: React.ReactNode;
  /** Width of the glass surface (pixels or CSS value like '100%') */
  width?: number | string;
  /** Height of the glass surface (pixels or CSS value like '100vh') */
  height?: number | string;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Border width factor for displacement map */
  borderWidth?: number;
  /** Brightness percentage for displacement map */
  brightness?: number;
  /** Opacity of displacement map elements */
  opacity?: number;
  /** Input blur amount in pixels */
  blur?: number;
  /** Output blur (stdDeviation) */
  displace?: number;
  /** Background frost opacity (0-1) */
  backgroundOpacity?: number;
  /** Backdrop filter saturation factor */
  saturation?: number;
  /** Main displacement scale */
  distortionScale?: number;
  /** Red channel extra displacement offset */
  redOffset?: number;
  /** Green channel extra displacement offset */
  greenOffset?: number;
  /** Blue channel extra displacement offset */
  blueOffset?: number;
  /** X displacement channel selector */
  xChannel?: 'R' | 'G' | 'B';
  /** Y displacement channel selector */
  yChannel?: 'R' | 'G' | 'B';
  /** Mix blend mode for displacement map */
  mixBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
  /** Hibrit glass variant - navbar or floating */
  variant?: 'navbar' | 'floating';
  /** Enable hibrit glass gradients */
  enableHibrit?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles object */
  style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = '100%',
  height = 'auto',
  borderRadius = 16,
  borderWidth = 1,
  brightness = 110,
  opacity = 0.2,
  blur = 20,
  displace = 2,
  backgroundOpacity = 0.1,
  saturation = 1.2,
  distortionScale = 8,
  redOffset = 0,
  greenOffset = 0,
  blueOffset = 0,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'normal',
  variant = 'navbar',
  enableHibrit = true,
  className = '',
  style = {},
}) => {
  // Generate unique filter ID for multiple instances
  const filterId = React.useMemo(() => `glass-filter-${Math.random().toString(36).substr(2, 9)}`, []);
  const lightGradientId = React.useMemo(() => `hibrit-light-${Math.random().toString(36).substr(2, 9)}`, []);
  const darkGradientId = React.useMemo(() => `hibrit-dark-${Math.random().toString(36).substr(2, 9)}`, []);

  // Determine gradient colors based on variant
  const getGradientStops = (isDark: boolean) => {
    if (!enableHibrit) return null;
    
    if (variant === 'navbar') {
      return isDark ? [
        { offset: '0%', color: 'rgba(59, 130, 246, 0.08)' },   // blue
        { offset: '35%', color: 'rgba(147, 51, 234, 0.10)' },  // purple
        { offset: '70%', color: 'rgba(236, 72, 153, 0.06)' },  // pink
        { offset: '100%', color: 'rgba(20, 184, 166, 0.05)' }, // teal
      ] : [
        { offset: '0%', color: 'rgba(74, 222, 128, 0.08)' },   // light green
        { offset: '35%', color: 'rgba(20, 184, 166, 0.10)' },  // teal
        { offset: '70%', color: 'rgba(59, 130, 246, 0.08)' },  // blue
        { offset: '100%', color: 'rgba(147, 51, 234, 0.06)' }, // purple
      ];
    } else {
      return isDark ? [
        { offset: '0%', color: 'rgba(59, 130, 246, 0.10)' },   // blue
        { offset: '35%', color: 'rgba(147, 51, 234, 0.12)' },  // purple
        { offset: '70%', color: 'rgba(236, 72, 153, 0.08)' },  // pink
        { offset: '100%', color: 'rgba(20, 184, 166, 0.06)' }, // teal
      ] : [
        { offset: '0%', color: 'rgba(74, 222, 128, 0.10)' },   // light green
        { offset: '35%', color: 'rgba(20, 184, 166, 0.12)' },  // teal
        { offset: '70%', color: 'rgba(59, 130, 246, 0.10)' },  // blue
        { offset: '100%', color: 'rgba(147, 51, 234, 0.08)' }, // purple
      ];
    }
  };

  const lightStops = getGradientStops(false);
  const darkStops = getGradientStops(true);

  const containerStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness}%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness}%)`,
    background: enableHibrit ? `url(#${lightGradientId})` : `rgba(255, 255, 255, ${backgroundOpacity})`,
    border: enableHibrit ?
      (variant === 'navbar' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.12)')
      : `${borderWidth}px solid rgba(255, 255, 255, 0.18)`,
    boxShadow: enableHibrit && variant === 'floating' ? '0 20px 50px rgba(0, 0, 0, 0.12)' : 'none',
    filter: `url(#${filterId})`,
    mixBlendMode: mixBlendMode as any,
    ...style,
  };

  // Dark mode styles applied via CSS class
  React.useEffect(() => {
    if (!enableHibrit) return;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .dark .glass-surface-${filterId} {
        background: url(#${darkGradientId}) !important;
        border: ${variant === 'navbar' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(255, 255, 255, 0.08)'} !important;
        ${variant === 'floating' ? 'box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25) !important;' : ''}
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [filterId, variant, enableHibrit, darkGradientId]);

  return (
    <>
      {/* SVG Filters and Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Hibrit Light Mode Gradient */}
          {enableHibrit && lightStops && (
            <linearGradient id={lightGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {lightStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          )}

          {/* Hibrit Dark Mode Gradient */}
          {enableHibrit && darkStops && (
            <linearGradient id={darkGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {darkStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          )}

          {/* Main glass surface filter */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            {/* Create displacement map */}
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="2"
              result="displacement"
              seed="1"
            />
            
            {/* Apply subtle displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="displacement"
              scale={distortionScale}
              xChannelSelector={xChannel}
              yChannelSelector={yChannel}
              result="distorted"
            />

            {/* Add gaussian blur for glass effect */}
            <feGaussianBlur
              in="distorted"
              stdDeviation={displace}
              result="blurred"
            />

            {/* Color matrix for subtle enhancement */}
            <feColorMatrix
              in="blurred"
              type="matrix"
              values={`1.02 0 0 0 0
                      0 1.02 0 0 0
                      0 0 1.02 0 0
                      0 0 0 ${opacity} 0`}
              result="enhanced"
            />

            {/* Final composite */}
            <feComposite
              in="enhanced"
              in2="SourceGraphic"
              operator="over"
            />
          </filter>
        </defs>
      </svg>

      {/* Glass Surface Container */}
      <div
        className={`glass-surface glass-surface-${filterId} ${className}`}
        style={containerStyle}
      >
        {children}
      </div>
    </>
  );
};

export default GlassSurface;
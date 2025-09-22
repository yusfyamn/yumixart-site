import { useState, ReactNode, useRef, useCallback } from 'react';
import './Folder.css';

interface FolderProps {
  color?: string;
  size?: number;
  items?: ReactNode[];
  className?: string;
  hoverToOpen?: boolean;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', hoverToOpen = false }: FolderProps) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
  
  // 🚀 Throttle ref for 60 FPS performance
  const throttleRef = useRef<{ [key: number]: number }>({});

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    if (!hoverToOpen) {
      setOpen(prev => !prev);
      if (open) {
        setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
      }
    }
  };

  const handleMouseEnter = () => {
    if (hoverToOpen) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverToOpen) {
      setOpen(false);
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  // 🎯 Throttled Mouse Move Handler - 60 FPS Performance
  const handlePaperMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    if (!open) return;
    
    const now = performance.now();
    if (throttleRef.current[index] && now - throttleRef.current[index] < 16) {
      return; // Skip if less than 16ms passed (60 FPS)
    }
    throttleRef.current[index] = now;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  }, [open]);

  const handlePaperMouseLeave = useCallback((e: React.MouseEvent, index: number) => {
    // Clear throttle cache for this paper
    delete throttleRef.current[index];
    
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  }, []);

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                open
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    } as React.CSSProperties
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
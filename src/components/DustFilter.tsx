import React, { useRef, useEffect, useState } from "react";
import { DustCard } from "../types";
import { Sparkles, Trash2, ShieldAlert } from "lucide-react";

interface DustFilterProps {
  card: DustCard;
}

export const DustFilterCard: React.FC<DustFilterProps> = ({ card }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isCleared, setIsCleared] = useState(false);
  const [isWiping, setIsWiping] = useState(false);
  const [clearedPercentage, setClearedPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle canvas sizing
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height || 180;
      drawDustPattern();
    };

    const drawDustPattern = () => {
      if (!ctx || !canvas) return;
      ctx.save();
      // Draw a dusty sepia-grey textured background
      ctx.fillStyle = "#5c524a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create "specks of dust" and "tarnished wood/gilt" grain texture
      ctx.fillStyle = "rgba(40, 30, 20, 0.4)";
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        ctx.fillRect(x, y, size, size);
      }

      // Add soft white/grey moldy dust speckles
      ctx.fillStyle = "rgba(220, 215, 200, 0.35)";
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 4 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add "tarnished gilt" golden dust vein streaks
      ctx.strokeStyle = "rgba(193, 148, 45, 0.2)";
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, 0);
        ctx.lineTo(Math.random() * canvas.width, canvas.height);
        ctx.stroke();
      }

      // Draw instruction text on the dust layer
      ctx.font = "italic 15px Georgia, serif";
      ctx.fillStyle = "#eadecb";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0,0,0,0.6)";
      ctx.shadowBlur = 4;
      ctx.fillText("Brushed in heavy dust...", canvas.width / 2, canvas.height / 2 - 12);
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.fillStyle = "#bfa583";
      ctx.fillText("[ CLICK & DRAG TO BRUSH AWAY ]", canvas.width / 2, canvas.height / 2 + 15);
      ctx.restore();
    };

    resizeCanvas();

    // Setup resize observer
    const observer = new ResizeObserver(() => {
      if (!isCleared) {
        resizeCanvas();
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [card.id, isCleared]);

  const handleStart = () => {
    setIsWiping(true);
  };

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isWiping || isCleared) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Erase circular path
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Periodically compute cleared percentage
    calculateCleared(ctx, canvas);
  };

  const handleEnd = () => {
    setIsWiping(false);
  };

  const calculateCleared = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;

      // Sample every 10th pixel for performance
      for (let i = 3; i < data.length; i += 40) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }

      const percentage = (transparentPixels / (totalPixels / 10)) * 100;
      setClearedPercentage(Math.min(percentage, 100));

      if (percentage > 45) {
        setIsCleared(true);
        setClearedPercentage(100);
      }
    } catch (err) {
      // Sandbox fallback
    }
  };

  const handleForceClear = () => {
    setIsCleared(true);
    setClearedPercentage(100);
  };

  const handleReset = () => {
    setIsCleared(false);
    setClearedPercentage(0);
  };

  return (
    <div
      ref={containerRef}
      id={`dust-card-${card.id}`}
      className="relative min-h-[220px] bg-white rounded border border-sepia-300 p-6 shadow-xs overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-gilt-500 hover:editorial-shadow"
    >
      {/* Content under the dust */}
      <div className="z-0 flex flex-col justify-between h-full space-y-4">
        <div>
          <span className="font-mono text-xs text-gilt-600 font-semibold tracking-wider uppercase">
            Literary Concept
          </span>
          <h4 className="font-serif italic text-xl font-bold text-sepia-900 mt-1 mb-2">
            {card.term}
          </h4>
          <p className="font-sans text-sm text-sepia-800 leading-relaxed italic border-l-2 border-gilt-500 pl-3">
            {card.definition}
          </p>
        </div>
        <div className="pt-3 border-t border-sepia-200">
          <span className="font-mono text-[10px] text-sepia-500 uppercase tracking-widest block mb-1">
            Historical Backdrop / Course Context
          </span>
          <p className="font-sans text-xs text-sepia-700 leading-relaxed font-light">
            {card.historicalFact}
          </p>
        </div>
      </div>

      {/* Interactive dust canvas overlay */}
      {!isCleared && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 touch-none cursor-crosshair transition-opacity duration-500 rounded-xs"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      )}

      {/* Interactive overlay indicator / button */}
      <div className="absolute top-3 right-3 z-20 flex gap-2">
        {!isCleared ? (
          <button
            onClick={handleForceClear}
            className="flex items-center gap-1.5 bg-sepia-900/85 hover:bg-sepia-900 text-sepia-50 px-3 py-1.5 rounded text-[11px] font-mono transition-colors shadow-md backdrop-blur-xs cursor-pointer"
            title="Use feather duster to instantly clear"
          >
            <Sparkles className="w-3.5 h-3.5 text-gilt-300 animate-pulse" />
            <span>Brush Clean</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 bg-sepia-100 hover:bg-sepia-200 text-sepia-800 px-3 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer border border-sepia-300"
          >
            <Trash2 className="w-3 h-3" />
            <span>Restore Dust</span>
          </button>
        )}
      </div>

      {/* Small percentage bar showing feedback */}
      {!isCleared && clearedPercentage > 0 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-sepia-950/95 text-gilt-200 px-3 py-1 rounded text-[10px] font-mono flex items-center gap-2 shadow-lg">
          <div className="w-12 h-1 bg-sepia-800 rounded overflow-hidden">
            <div
              className="h-full bg-gilt-450 transition-all duration-100"
              style={{ width: `${(clearedPercentage / 45) * 100}%` }}
            />
          </div>
          <span>Dust Cleared: {Math.round((clearedPercentage / 45) * 100)}%</span>
        </div>
      )}
    </div>
  );
};

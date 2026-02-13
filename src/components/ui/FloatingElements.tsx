"use client";

interface FloatingElementsProps {
  variant?: "default" | "sparse" | "dense";
  className?: string;
}

// Simplified static floating elements using CSS animations for better performance
export function FloatingElements({
  variant = "default",
  className = "",
}: FloatingElementsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Static white glow orbs - no JS animations */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.025] animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.02] animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          right: "10%",
          bottom: "20%",
          animationDelay: "2s",
        }}
      />
      {variant !== "sparse" && (
        <div
          className="absolute w-[250px] h-[250px] rounded-full opacity-[0.015] animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            animationDelay: "1s",
          }}
        />
      )}
    </div>
  );
}

// Simplified animated lines - only renders on mount
export function AnimatedLines({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Static gradient lines */}
      <div
        className="absolute h-px w-full top-1/4"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute h-px w-full top-3/4"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

// Static glowing orb - CSS only
export function GlowingOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-slow ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(102, 126, 234, 0.06) 0%, transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}

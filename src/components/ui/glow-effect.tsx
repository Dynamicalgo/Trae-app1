import { cn } from "@/lib/utils";

type GlowEffectProps = {
  colors: string[];
  mode?: 'static' | 'dynamic';
  blur?: 'low' | 'medium' | 'high';
  className?: string;
};

const blurMap = {
  low: 'blur-[40px]',
  medium: 'blur-[80px]',
  high: 'blur-[120px]',
};

export function GlowEffect({ 
  colors, 
  mode = 'static', 
  blur = 'medium',
  className 
}: GlowEffectProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute -inset-[100%] opacity-50",
          blurMap[blur],
          mode === 'dynamic' && 'animate-glow',
          className
        )}
      >
        {colors.map((color, index) => (
          <div
            key={color}
            className="absolute inset-0 transform"
            style={{
              backgroundColor: color,
              transform: `translate(${index * 25}%, ${index * 25}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
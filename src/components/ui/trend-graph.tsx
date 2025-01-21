import { motion } from "framer-motion";

interface TrendGraphProps {
  trend: "up" | "down";
  className?: string;
}

export function TrendGraph({ trend, className }: TrendGraphProps) {
  const points = trend === "up" 
    ? "M0,10 L5,7 L10,8 L15,5 L20,3" 
    : "M0,3 L5,5 L10,7 L15,8 L20,10";

  return (
    <svg className={className} width="20" height="12" viewBox="0 0 20 12">
      <motion.path
        d={points}
        stroke={trend === "up" ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}
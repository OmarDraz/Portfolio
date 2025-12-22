import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: string | boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const variantStyles = {
  primary:
    "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)]",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground/30",
  ghost:
    "bg-transparent text-foreground hover:bg-secondary",
};

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  download,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    px-6 py-3 rounded-lg font-medium text-sm
    transition-all duration-300 ease-out
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={baseStyles}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="outline-none">
      {content}
    </button>
  );
}

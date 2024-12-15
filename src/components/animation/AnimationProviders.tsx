interface Props {
  children: React.ReactNode;
  delayMs: number;
}

export function FadeInAnimationProvider({ children, delayMs }: Props) {
  return (
    <div
      className="animate-fadeIn_settle opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
      style={{
        animationDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

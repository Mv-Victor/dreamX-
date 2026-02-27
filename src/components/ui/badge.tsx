'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-[rgba(192,3,28,0.20)] text-[#FF4D4D]': variant === 'default',
          'bg-white/5 text-white/60': variant === 'secondary',
          'bg-[rgba(255,77,77,0.20)] text-accent': variant === 'accent',
          'border border-white/10 text-white/40': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}

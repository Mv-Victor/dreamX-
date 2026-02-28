'use client';

import { cn } from '@/lib/utils';

interface SegmentedControlOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div className={cn('flex gap-2', className)}>
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              'flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer border',
              isActive
                ? 'bg-[var(--brand-primary-rgba-20)] border-[var(--brand-primary-rgba-40)] text-[var(--brand-accent)]'
                : 'bg-[var(--bg-white-5)] border-[var(--border-white-10)] text-[var(--text-white-60)]'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

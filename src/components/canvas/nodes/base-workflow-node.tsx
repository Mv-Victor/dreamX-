'use client';

import { Handle, Position } from '@xyflow/react';
import { cn } from '@/lib/utils';
import { Check, Loader2, Lock, LucideIcon } from 'lucide-react';

interface BaseWorkflowNodeProps {
  data: Record<string, unknown>;
  selected: boolean;
  icon: LucideIcon;
  iconColor: string;
}

export function BaseWorkflowNode({ data, selected, icon: Icon, iconColor }: BaseWorkflowNodeProps) {
  const status = data.status as string;
  const locked = data.locked as boolean;

  const StatusIcon = status === 'completed' ? Check : status === 'active' ? Loader2 : Lock;
  const iconClass = status === 'completed' ? 'text-green-500' : status === 'active' ? 'text-[#C0031C] animate-spin' : 'text-white/40';
  const bgClass = status === 'completed' ? 'bg-green-500/20' : status === 'active' ? 'bg-[rgba(192,3,28,0.20)]' : 'bg-white/5';

  return (
    <div className={cn(
      'w-[220px] rounded-xl border-2 px-4 py-3 transition-all',
      locked ? 'opacity-40 bg-white/[0.02]' : 'bg-[#0a0a0a]',
      selected ? 'border-[#C0031C] shadow-lg shadow-[rgba(192,3,28,0.20)]' : 'border-white/10',
      status === 'active' && 'animate-pulse-glow'
    )}>
      <Handle type="target" position={Position.Top} />
      <div className="flex items-center gap-2 mb-1">
        <div className={cn('w-6 h-6 rounded-full flex items-center justify-center', bgClass)}>
          <StatusIcon className={cn('h-3.5 w-3.5', iconClass)} />
        </div>
        <Icon className={cn('h-4 w-4', iconColor)} />
        <span className="text-sm font-medium text-white/80">{data.label as string}</span>
      </div>
      <p className="text-xs text-white/40 ml-8">{data.description as string}</p>
      {locked && (
        <p className="text-[10px] text-white/20 ml-8 mt-1">完成上一步后解锁</p>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

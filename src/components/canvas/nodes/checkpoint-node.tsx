'use client';

import { NodeProps } from '@xyflow/react';
import { Settings } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function CheckPointNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={Settings} iconColor="text-white/60" />;
}

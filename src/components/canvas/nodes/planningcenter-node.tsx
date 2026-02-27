'use client';

import { NodeProps } from '@xyflow/react';
import { LayoutGrid } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function PlanningCenterNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={LayoutGrid} iconColor="text-purple-400" />;
}

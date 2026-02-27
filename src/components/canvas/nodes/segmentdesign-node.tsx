'use client';

import { NodeProps } from '@xyflow/react';
import { Clapperboard } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function SegmentDesignNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={Clapperboard} iconColor="text-red-400" />;
}

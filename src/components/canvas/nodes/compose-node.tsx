'use client';

import { NodeProps } from '@xyflow/react';
import { Download } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function ComposeNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={Download} iconColor="text-cyan-400" />;
}

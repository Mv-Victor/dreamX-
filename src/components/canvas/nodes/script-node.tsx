'use client';

import { NodeProps } from '@xyflow/react';
import { FileText } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function ScriptNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={FileText} iconColor="text-yellow-400" />;
}

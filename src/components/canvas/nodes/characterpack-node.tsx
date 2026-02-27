'use client';

import { NodeProps } from '@xyflow/react';
import { Users } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function CharacterPackNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={Users} iconColor="text-blue-400" />;
}

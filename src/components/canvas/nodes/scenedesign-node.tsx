'use client';

import { NodeProps } from '@xyflow/react';
import { ImageIcon } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function SceneDesignNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={ImageIcon} iconColor="text-emerald-400" />;
}

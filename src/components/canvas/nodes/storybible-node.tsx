'use client';

import { NodeProps } from '@xyflow/react';
import { BookOpen } from 'lucide-react';
import { BaseWorkflowNode } from './base-workflow-node';

export function StoryBibleNode({ data, selected }: NodeProps) {
  return <BaseWorkflowNode data={data as Record<string, unknown>} selected={!!selected} icon={BookOpen} iconColor="text-orange-400" />;
}

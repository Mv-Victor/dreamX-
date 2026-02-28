/**
 * Generation task types
 */
export const GENERATION_TASK_TYPES = ['image', 'video', 'characters', 'script'] as const;
export type GenerationTaskType = typeof GENERATION_TASK_TYPES[number];
export type GenerationTaskStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface GenerationTask {
  task_id: string;
  type: GenerationTaskType;
  status: GenerationTaskStatus;
  progress: number;
  result?: string;
  error?: string;
}

/**
 * Storage keys for localStorage
 * Centralized management with sanitization
 */

const sanitize = (str: string): string => str.replace(/[^a-zA-Z0-9_-]/g, '_');

export const STORAGE_KEYS = {
  /** Node positions for a project */
  nodes: (projectId: string) => `dreamx-nodes-${sanitize(projectId)}`,
  /** Viewport state for a project */
  viewport: (projectId: string) => `dreamx-viewport-${sanitize(projectId)}`,
  /** Theme preference */
  theme: 'dreamx-theme',
} as const;

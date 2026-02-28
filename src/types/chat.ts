/**
 * Chat message types and interfaces
 */

export type ChatMessageRole = 'user' | 'assistant';

export interface ChatMessage {
  role: ChatMessageRole;
  content: string;
  timestamp?: number;
}

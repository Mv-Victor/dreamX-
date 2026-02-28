/**
 * Chat message types
 */
export const CHAT_MESSAGE_ROLES = ['user', 'assistant'] as const;
export type ChatMessageRole = typeof CHAT_MESSAGE_ROLES[number];

export interface ChatMessage {
  role: ChatMessageRole;
  content: string;
}

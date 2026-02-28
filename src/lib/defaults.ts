/**
 * DreamX Studio 默认值常量
 * 用于各组件的默认数据初始化
 */

import type { CheckPointData } from '@/types/canvas';

/**
 * CheckPoint 节点默认数据
 */
export const DEFAULT_CHECKPOINT_DATA: CheckPointData = {
  label: '创意构思',
  status: 'generating',
  language: 'zh-CN',
  rating: 'PG',
  camera_frame_ratio: '9:16',
  episode_count: 1,
  episode_duration: 60,
  visual_style_id: 1,
  idea_text: '',
};

/**
 * 视口保存防抖时间（毫秒）
 */
export const VIEWPORT_SAVE_DEBOUNCE_MS = 500;

/**
 * React Flow 最小缩放
 */
export const MIN_ZOOM = 0.3;

/**
 * React Flow 最大缩放
 */
export const MAX_ZOOM = 2;

/**
 * React Flow 初始 padding
 */
export const FIT_VIEW_PADDING = 0.3;

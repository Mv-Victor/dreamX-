/**
 * API 类型定义
 * 参考 Drama.Land 接口规范设计
 */

// ==================== 通用类型 ====================

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export enum ErrorCode {
  SUCCESS = 0,
  VALIDATION_ERROR = 1001,
  UNAUTHORIZED = 1002,
  FORBIDDEN = 1003,
  NOT_FOUND = 1004,
  RATE_LIMITED = 1005,
  INSUFFICIENT_CREDITS = 1006,
  GENERATION_FAILED = 2001,
  TIMEOUT = 2002,
  SERVER_ERROR = 5000,
}

// ==================== 用户模块 ====================

export interface UserInfo {
  uid: string;
  nickname: string;
  avatar: string;
  email: string;
  created_at: number;
}

export interface CreditsSummary {
  total_credits: number;
  used_credits: number;
  available_credits: number;
  subscription_tier: 'STARTER' | 'BASIC' | 'PLUS' | 'PRO' | 'ULTRA';
}

export interface PointsConfig {
  daily_check_in: number;
  share_invite: number;
  complete_project: number;
  costs: Record<string, number>;
}

// ==================== 项目模块 ====================

export type ProjectType = 'single_episode' | 'multi_episodes' | 'script_based' | 'music_mv' | 'redbook_note';
export type NodeState = 'check_point' | 'story_bible' | 'character_pack' | 'planning_center' | 'script' | 'scene_design' | 'segment_design' | 'compose';

export interface Project {
  project_id: string;
  project_type: ProjectType;
  series_id: string;
  series_title: string;
  drama_cover: string | null;
  updated_at: number;
  episode_count: number;
  current_state: NodeState;
}

export interface ProjectListResponse {
  total: number;
  projects: Project[];
}

export interface CreateProjectRequest {
  project_type: ProjectType;
  idea_text: string;
  language: string;
  extra?: {
    episode_count?: number;
    episode_duration?: number;
    camera_frame_ratio?: '9:16' | '16:9' | '1:1';
  };
}

export interface CreateProjectResponse {
  project_id: string;
  series_id: string;
  series_title: string;
  current_state: NodeState;
}

// ==================== 画布模块 ====================

export interface CanvasNode {
  id: string;
  type: string;
  label: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
  locked: boolean;
}

export interface CanvasEdge {
  source: string;
  target: string;
}

export interface CanvasData {
  series_id: string;
  current_state: NodeState;
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

export interface MainCanvasRequest {
  project_id: string;
  series_id: string;
  event: 'query_project_state' | 'resume_project';
}

// ==================== 视觉风格 ====================

export interface VisualStyle {
  id: number;
  title: string;
  type: 'Realistic/Live' | '2D Animation' | 'Illustration' | '3D Render' | 'Experimental';
  description: string;
  img_url: string;
}

// ==================== 配音模块 ====================

export interface Voice {
  id: string;
  name: string;
  description: string;
  audio_url: string;
  age: string[];
  language: string;
  gender: 'Male' | 'Female';
}

export interface VoiceListResponse {
  voice_list: Voice[];
}

// ==================== AI 生成模块 ====================

export interface StoryBibleOption {
  id: number;
  title: string;
  genre: string;
  logline: string;
  synopsis: string;
}

export interface GenerateStoryBibleRequest {
  project_id: string;
  series_id: string;
  idea_text: string;
  options?: {
    count?: number;
    genre?: string;
  };
}

export interface GenerateStoryBibleResponse {
  options: StoryBibleOption[];
}

export interface Character {
  id: string;
  name: string;
  occupation: string;
  level: 'major' | 'supporting' | 'minor' | 'extra';
  gender: string;
  age: string;
  height: string;
  brief_bio: string;
  appearance: string;
  image_url: string | null;
  voice_id: string | null;
}

export interface GenerateCharactersRequest {
  project_id: string;
  series_id: string;
  story_bible_id: number;
}

export interface GenerateCharactersResponse {
  characters: Character[];
}

export interface Scene {
  scene_number: number;
  header: string;
  description: string;
  dialogue: string[];
  vo_narration: string;
}

export interface Episode {
  episode_id: string;
  title: string;
  summary: string;
  scenes: Scene[];
}

export interface GenerateScriptRequest {
  project_id: string;
  series_id: string;
  episode_id: string;
}

export interface GenerateScriptResponse {
  episode_id: string;
  scenes: Scene[];
}

// ==================== 档案馆模块 ====================

export interface ShowcaseItem {
  id: string;
  type: 'video' | 'image';
  title: string;
  cover_url: string;
  video_url?: string;
  image_url?: string;
  duration?: number;
  views: number;
  created_at: number;
  project_type?: ProjectType;
}

export interface ShowcaseListResponse {
  total: number;
  items: ShowcaseItem[];
}

// ==================== CheckPoint 类型 ====================

export interface CheckPoint {
  language: string;
  rating: 'PG' | 'PG-13' | 'R';
  visual_style_id: number;
  mode: 'standard';
  idea_text: string;
  episode_count: number;
  episode_duration: number;
  camera_frame_ratio: '9:16' | '16:9' | '1:1';
}

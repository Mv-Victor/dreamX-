export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface Project {
  project_id: string;
  project_type: string;
  series_id: string;
  series_title: string;
  drama_cover: string | null;
  updated_at: number;
  episode_count: number;
  current_state: string;
}

export interface ProjectListData {
  total: number;
  projects: Project[];
}

export interface VisualStyle {
  id: number;
  title: string;
  type: string;
  description: string;
  img_url: string;
}

export interface Voice {
  id: string;
  name: string;
  description: string;
  audio_url: string;
  age: string[];
  language: string;
  gender: string;
}

export interface VoiceListData {
  voice_list: Voice[];
}

export interface CanvasNode {
  id: string;
  type: string;
  label: string;
  status: 'completed' | 'active' | 'pending';
  locked: boolean;
}

export interface CanvasEdge {
  source: string;
  target: string;
}

export interface CanvasData {
  series_id: string;
  current_state: string;
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

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
  project_type?: string;
}

export interface ShowcaseListData {
  total: number;
  items: ShowcaseItem[];
}

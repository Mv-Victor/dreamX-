import { ApiResponse } from './types';

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
  subscription_tier: string;
}

export interface PointsConfig {
  daily_check_in: number;
  share_invite: number;
  complete_project: number;
  costs: Record<string, number>;
}

export async function getUserInfo(): Promise<ApiResponse<UserInfo>> {
  return {
    code: 200,
    message: '请求成功',
    data: {
      uid: 'user_001',
      nickname: '栋少',
      avatar: '',
      email: 'user@example.com',
      created_at: 1709020800000,
    },
  };
}

export async function getCreditsSummary(): Promise<ApiResponse<CreditsSummary>> {
  return {
    code: 200,
    message: '请求成功',
    data: {
      total_credits: 4825,
      used_credits: 1175,
      available_credits: 3650,
      subscription_tier: 'STARTER',
    },
  };
}

export async function getPointsConfig(): Promise<ApiResponse<PointsConfig>> {
  return {
    code: 200,
    message: '请求成功',
    data: {
      daily_check_in: 10,
      share_invite: 50,
      complete_project: 100,
      costs: {
        chat_message: 1,
        story_bible_generate: 20,
        character_pack_generate: 50,
        planning_center_generate: 15,
        script_generate: 10,
        scene_design_generate: 50,
        segment_design_generate: 60,
        video_generate_single: 300,
        music_generate: 50,
        compose_export: 5,
      },
    },
  };
}

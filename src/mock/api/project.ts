import { ApiResponse, Project, ProjectListData } from './types';
import { mockProjects } from '../data';

export async function getProjectList(_params: { page: number; page_size: number }): Promise<ApiResponse<ProjectListData>> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { page, page_size } = _params;
  return {
    code: 200,
    message: '请求成功',
    data: {
      total: mockProjects.length,
      projects: mockProjects.map(p => ({ ...p, current_state: 'check_point' })),
    },
  };
}

export async function getProjectDetail(projectId: string): Promise<ApiResponse<Project>> {
  const project = mockProjects.find(p => p.project_id === projectId);
  if (!project) {
    return { code: 404, message: '项目不存在', data: null as unknown as Project };
  }
  return {
    code: 200,
    message: '请求成功',
    data: { ...project, current_state: 'check_point' },
  };
}

export async function createProject(params: {
  project_type: string;
  idea_text: string;
  language: string;
  extra?: Record<string, unknown>;
}): Promise<ApiResponse<{ project_id: string; series_id: string; series_title: string; current_state: string }>> {
  const newProject = {
    project_id: `p-${Date.now()}`,
    project_type: params.project_type,
    series_id: `s-${Date.now()}`,
    series_title: params.idea_text.slice(0, 20) || '未命名项目',
    drama_cover: null,
    updated_at: Date.now(),
    episode_count: params.extra?.episode_count || 1,
    current_state: 'check_point',
  };
  return {
    code: 200,
    message: '项目创建成功',
    data: {
      project_id: newProject.project_id,
      series_id: newProject.series_id,
      series_title: newProject.series_title,
      current_state: newProject.current_state,
    },
  };
}

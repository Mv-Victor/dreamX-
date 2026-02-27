import { ApiResponse, ShowcaseListData, ShowcaseItem } from './types';

const mockShowcases: ShowcaseItem[] = [
  { id: 's-001', type: 'video', title: '共生劫：白骨夫人的生死局', cover_url: '', video_url: '', duration: 58, views: 12300, created_at: Date.now() - 3600000, project_type: 'multi_episodes' },
  { id: 's-002', type: 'video', title: '霓虹深处的秘密', cover_url: '', video_url: '', duration: 45, views: 8700, created_at: Date.now() - 7200000, project_type: 'single_episode' },
  { id: 's-003', type: 'image', title: '赛博朋克角色设计', cover_url: '', image_url: '', views: 5200, created_at: Date.now() - 14400000 },
  { id: 's-004', type: 'video', title: '星际漂流者', cover_url: '', video_url: '', duration: 62, views: 3100, created_at: Date.now() - 21600000, project_type: 'single_episode' },
  { id: 's-005', type: 'video', title: '古镇迷踪', cover_url: '', video_url: '', duration: 51, views: 15600, created_at: Date.now() - 28800000, project_type: 'multi_episodes' },
  { id: 's-006', type: 'image', title: '古风场景概念图', cover_url: '', image_url: '', views: 9400, created_at: Date.now() - 36000000 },
  { id: 's-007', type: 'video', title: '山海经异闻录', cover_url: '', video_url: '', duration: 73, views: 22100, created_at: Date.now() - 43200000, project_type: 'multi_episodes' },
  { id: 's-008', type: 'video', title: '职场暴击：年终奖缩水 80%', cover_url: '', video_url: '', duration: 38, views: 45300, created_at: Date.now() - 50400000, project_type: 'redbook_note' },
];

export async function getShowcaseItems(params: { page: number; page_size: number; type?: 'all' | 'image' | 'video' }): Promise<ApiResponse<ShowcaseListData>> {
  let items = mockShowcases;
  if (params.type && params.type !== 'all') {
    items = items.filter(item => item.type === params.type);
  }
  const start = (params.page - 1) * params.page_size;
  const end = start + params.page_size;
  return {
    code: 200,
    message: '请求成功',
    data: {
      total: items.length,
      items: items.slice(start, end),
    },
  };
}

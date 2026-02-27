import { ApiResponse, VisualStyle, VoiceListData, CanvasData, CanvasNode, CanvasEdge, Voice } from './types';
import { mockVisualStyles } from '../data';

const mockApiVoices: Voice[] = [
  { id: 'v-zh-001', name: '霸道总裁', description: '低沉磁性男声，气场强大', audio_url: '', age: ['Adult'], language: 'zh-CN', gender: 'Male' },
  { id: 'v-zh-002', name: '温柔御姐', description: '成熟知性女声，温暖有力', audio_url: '', age: ['Adult'], language: 'zh-CN', gender: 'Female' },
  { id: 'v-zh-003', name: '少年热血', description: '清亮少年音，充满活力', audio_url: '', age: ['Young'], language: 'zh-CN', gender: 'Male' },
  { id: 'v-en-001', name: 'Marcus', description: 'Deep warm baritone, narrator style', audio_url: '', age: ['Adult', 'Middle-Aged'], language: 'en-US', gender: 'Male' },
  { id: 'v-en-002', name: 'Sophia', description: 'Bright, youthful female voice', audio_url: '', age: ['Young Adult'], language: 'en-US', gender: 'Female' },
];

export async function getVisualStyleList(): Promise<ApiResponse<VisualStyle[]>> {
  return {
    code: 200,
    message: '请求成功',
    data: mockVisualStyles,
  };
}

export async function getVoices(params?: { language?: string; gender?: string }): Promise<ApiResponse<VoiceListData>> {
  let voices = mockApiVoices;
  if (params?.language) {
    voices = voices.filter(v => v.language === params.language);
  }
  if (params?.gender) {
    voices = voices.filter(v => v.gender === params.gender);
  }
  return {
    code: 200,
    message: '请求成功',
    data: { voice_list: voices },
  };
}

export async function getMainCanvas(params: { project_id: string; series_id: string; event: string }): Promise<ApiResponse<CanvasData>> {
  // Mock: return progressive nodes based on project state
  const nodes: CanvasNode[] = [
    { id: 'node-0', type: 'entry', label: '开始', status: 'completed', locked: false },
    { id: 'node-1', type: 'checkpoint', label: '基础信息', status: 'completed', locked: false },
    { id: 'node-2', type: 'characterpack', label: '角色集', status: 'active', locked: false },
    { id: 'node-3', type: 'script', label: '剧本撰写', status: 'pending', locked: true },
    { id: 'node-4', type: 'scenedesign', label: '场景设计', status: 'pending', locked: true },
    { id: 'node-5', type: 'segmentdesign', label: '分镜设计', status: 'pending', locked: true },
    { id: 'node-6', type: 'compose', label: '合成导出', status: 'pending', locked: true },
  ];
  const edges: CanvasEdge[] = nodes.slice(0, -1).map((_, i) => ({
    source: `node-${i}`,
    target: `node-${i + 1}`,
  }));
  return {
    code: 200,
    message: '请求成功',
    data: {
      series_id: params.series_id,
      current_state: 'character_pack',
      nodes,
      edges,
    },
  };
}

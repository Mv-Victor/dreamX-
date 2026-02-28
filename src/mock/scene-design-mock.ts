/**
 * Scene Design Mock Data
 */

export interface SceneDesignItem {
  id: number;
  header: string;
  status: 'completed' | 'generating' | 'pending';
}

export const SCENE_DESIGN_MOCK_DATA: SceneDesignItem[] = [
  { id: 1, header: '外景 - 荒山古道 - 黄昏', status: 'completed' },
  { id: 2, header: '内景 - 白骨洞 - 夜', status: 'generating' },
  { id: 3, header: '外景 - 山间小路 - 清晨', status: 'pending' },
  { id: 4, header: '内景 - 客栈 - 午后', status: 'pending' },
];

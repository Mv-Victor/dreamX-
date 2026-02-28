/**
 * Segment Design Mock Data
 */

export interface SegmentDesignItem {
  id: number;
  description: string;
  shotType: string;
  camera: string;
  duration: string;
  status: 'completed' | 'generating' | 'pending';
}

export const SEGMENT_DESIGN_MOCK_DATA: SegmentDesignItem[] = [
  { id: 1, description: '夕阳下的荒山古道，镜头缓缓推进', shotType: '远景', camera: '推镜头', duration: '4s', status: 'completed' },
  { id: 2, description: '悟空警觉地环顾四周', shotType: '中景', camera: '跟拍', duration: '3s', status: 'completed' },
  { id: 3, description: '唐僧坚定地望向前方', shotType: '特写', camera: '固定', duration: '2s', status: 'generating' },
  { id: 4, description: '白骨洞内，骨制王座的全貌', shotType: '全景', camera: '摇镜头', duration: '4s', status: 'pending' },
  { id: 5, description: '白骨夫人缓缓睁开冰蓝色的眼睛', shotType: '大特写', camera: '固定', duration: '3s', status: 'pending' },
];

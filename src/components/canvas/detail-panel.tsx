'use client';

import dynamic from 'next/dynamic';
import { X } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

const DetailLoading = () => (
  <div className="flex items-center justify-center h-40">
    <Spinner />
  </div>
);

const CheckPointDetail = dynamic(() => import('./details/checkpoint-detail').then(m => ({ default: m.CheckPointDetail })), { loading: DetailLoading });
const StoryBibleDetail = dynamic(() => import('./details/storybible-detail').then(m => ({ default: m.StoryBibleDetail })), { loading: DetailLoading });
const CharacterPackDetail = dynamic(() => import('./details/characterpack-detail').then(m => ({ default: m.CharacterPackDetail })), { loading: DetailLoading });
const PlanningCenterDetail = dynamic(() => import('./details/planningcenter-detail').then(m => ({ default: m.PlanningCenterDetail })), { loading: DetailLoading });
const ScriptDetail = dynamic(() => import('./details/script-detail').then(m => ({ default: m.ScriptDetail })), { loading: DetailLoading });
const SceneDesignDetail = dynamic(() => import('./details/scenedesign-detail').then(m => ({ default: m.SceneDesignDetail })), { loading: DetailLoading });
const SegmentDesignDetail = dynamic(() => import('./details/segmentdesign-detail').then(m => ({ default: m.SegmentDesignDetail })), { loading: DetailLoading });
const ComposeDetail = dynamic(() => import('./details/compose-detail').then(m => ({ default: m.ComposeDetail })), { loading: DetailLoading });

const detailMap: Record<string, React.ComponentType> = {
  checkpoint: CheckPointDetail,
  storybible: StoryBibleDetail,
  characterpack: CharacterPackDetail,
  planningcenter: PlanningCenterDetail,
  script: ScriptDetail,
  scenedesign: SceneDesignDetail,
  segmentdesign: SegmentDesignDetail,
  compose: ComposeDetail,
};

interface DetailPanelProps {
  selectedNodeType: string | null;
  onClose: () => void;
}

export function DetailPanel({ selectedNodeType, onClose }: DetailPanelProps) {
  if (!selectedNodeType) return null;

  const DetailComponent = detailMap[selectedNodeType];

  return (
    <div className="w-[340px] border-l border-white/10 bg-black/50 backdrop-blur-sm flex flex-col animate-slide-right">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium text-white/80 capitalize">{selectedNodeType}</h3>
        <button onClick={onClose} className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {DetailComponent ? <DetailComponent /> : (
          <div className="p-4 text-sm text-white/40">暂无详情面板</div>
        )}
      </div>
    </div>
  );
}

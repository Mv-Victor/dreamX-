'use client';

import { Sparkles, RefreshCw, Clapperboard, Lock, Play } from 'lucide-react';

const mockSegments = [
  { id: 1, description: '夕阳下的荒山古道，镜头缓缓推进', shotType: '远景', camera: '推镜头', duration: '4s', status: 'completed' as const },
  { id: 2, description: '悟空警觉地环顾四周', shotType: '中景', camera: '跟拍', duration: '3s', status: 'completed' as const },
  { id: 3, description: '唐僧坚定地望向前方', shotType: '特写', camera: '固定', duration: '2s', status: 'generating' as const },
  { id: 4, description: '白骨洞内，骨制王座的全貌', shotType: '全景', camera: '摇镜头', duration: '4s', status: 'pending' as const },
  { id: 5, description: '白骨夫人缓缓睁开冰蓝色的眼睛', shotType: '大特写', camera: '固定', duration: '3s', status: 'pending' as const },
];

export function SegmentDesignDetail() {
  const Section = ({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) => (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2.5">
        <Icon className="h-4 w-4 text-white/40" />
        <span className="text-xs font-medium text-white/60 uppercase tracking-wide">{label}</span>
      </div>
      {children}
    </div>
  );

  const StatusBadge = ({ status }: { status: 'completed' | 'generating' | 'pending' }) => {
    if (status === 'completed') {
      return <span className="text-[10px] text-green-500">✓ 完成</span>;
    }
    if (status === 'generating') {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] text-[#FF4D4D]">
          <span className="w-2.5 h-2.5 border-2 border-[#FF4D4D] border-t-transparent rounded-full animate-spin" />
          生成中
        </span>
      );
    }
    return <span className="inline-flex items-center gap-1 text-[10px] text-white/40"><Lock className="h-2.5 w-2.5" /> 待生成</span>;
  };

  return (
    <div className="p-4 space-y-4">
      <Section icon={Clapperboard} label="Segments">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-white/40">{mockSegments.length} 个分镜</p>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <span>总时长</span>
            <span className="text-white/60 font-medium">16s</span>
          </div>
        </div>

        <div className="space-y-2">
          {mockSegments.map((seg) => (
            <div key={seg.id} className="rounded-lg border border-white/10 bg-white/5 p-2.5 flex gap-3">
              {/* Thumbnail */}
              <div className="w-16 h-12 rounded-md bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center flex-shrink-0 relative border border-white/10">
                {seg.status === 'completed' && (
                  <Play className="h-4 w-4 text-white/40" />
                )}
                {seg.status === 'generating' && (
                  <div className="w-3.5 h-3.5 border-2 border-[#FF4D4D] border-t-transparent rounded-full animate-spin" />
                )}
                {seg.status === 'pending' && (
                  <Lock className="h-3.5 w-3.5 text-white/10" />
                )}
                <span className="absolute bottom-0.5 right-1 text-[9px] text-white/30 bg-black/60 px-1 rounded">
                  {seg.duration}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-white/70 leading-relaxed line-clamp-2">{seg.description}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)' }}>{seg.shotType}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)' }}>{seg.camera}</span>
                  <div className="ml-auto">
                    <StatusBadge status={seg.status} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer border border-white/10 flex items-center justify-center gap-2"
          style={{ background: 'transparent', color: 'rgba(255,255,255,0.60)' }}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          重新生成
        </button>
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
          style={{ background: 'rgba(192,3,28,0.20)', color: '#FF4D4D' }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          确认分镜
        </button>
      </div>
    </div>
  );
}

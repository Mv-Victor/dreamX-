'use client';

import { Sparkles, RefreshCw, Image as ImageIcon, Lock } from 'lucide-react';

const mockScenes = [
  { id: 1, header: '外景 - 荒山古道 - 黄昏', status: 'completed' as const },
  { id: 2, header: '内景 - 白骨洞 - 夜', status: 'generating' as const },
  { id: 3, header: '外景 - 山间小路 - 清晨', status: 'pending' as const },
  { id: 4, header: '内景 - 客栈 - 午后', status: 'pending' as const },
];

export function SceneDesignDetail() {
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
      <Section icon={ImageIcon} label="Scene Design">
        <p className="text-xs text-white/40 mb-3">AI 为每个场景生成视觉参考图</p>

        <div className="space-y-3">
          {mockScenes.map((scene) => (
            <div key={scene.id} className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center relative">
                {scene.status === 'generating' && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-5 h-5 border-2 border-[#FF4D4D] border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-[10px] text-white/60 mt-2">生成中...</p>
                    </div>
                  </div>
                )}
                {scene.status === 'completed' && <span className="text-2xl opacity-30">🖼</span>}
                {scene.status === 'pending' && (
                  <>
                    <span className="text-2xl opacity-10">🖼</span>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-white/20" />
                    </div>
                  </>
                )}
              </div>
              <div className="px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/30">
                    {String(scene.id).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-white/60 truncate">{scene.header}</span>
                </div>
                <StatusBadge status={scene.status} />
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
          确认场景
        </button>
      </div>
    </div>
  );
}

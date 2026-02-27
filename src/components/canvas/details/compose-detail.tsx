'use client';

import { Download, Play, Settings2, Film } from 'lucide-react';

export function ComposeDetail() {
  const Section = ({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) => (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2.5">
        <Icon className="h-4 w-4 text-white/40" />
        <span className="text-xs font-medium text-white/60 uppercase tracking-wide">{label}</span>
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      <Section icon={Film} label="Preview">
        <p className="text-xs text-white/40 mb-3">将所有分镜合成为最终视频</p>

        {/* Preview */}
        <div className="aspect-[9/16] max-h-[280px] rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mx-auto">
          <div className="text-center">
            <Play className="h-8 w-8 text-white/20 mx-auto" />
            <p className="text-[10px] text-white/30 mt-2">预览区域</p>
          </div>
        </div>
      </Section>

      {/* Export Settings */}
      <Section icon={Settings2} label="Export Settings">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/40">分辨率</span>
            <span className="text-[10px] text-white/60" style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>1080p</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/40">格式</span>
            <span className="text-[10px] text-white/60" style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>MP4</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/40">字幕</span>
            <span className="text-[10px] text-white/60" style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px' }}>内嵌</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-[10px] text-white/40">预计积分</span>
            <span className="text-[10px] font-medium" style={{ color: '#FF4D4D' }}>5</span>
          </div>
        </div>
      </Section>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer border border-white/10"
          style={{ background: 'transparent', color: 'rgba(255,255,255,0.60)' }}
        >
          剪映工程
        </button>
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
          style={{ background: 'rgba(192,3,28,0.20)', color: '#FF4D4D' }}
        >
          <Download className="h-3.5 w-3.5" />
          导出视频
        </button>
      </div>
    </div>
  );
}

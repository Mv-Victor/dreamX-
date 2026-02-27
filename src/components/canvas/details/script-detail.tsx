'use client';

import { useProjectStore } from '@/stores/project-store';
import { Sparkles, Edit3, FileText } from 'lucide-react';

export function ScriptDetail() {
  const { episodes } = useProjectStore();
  const episode = episodes[0];

  const Section = ({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) => (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2.5">
        <Icon className="h-4 w-4 text-white/40" />
        <span className="text-xs font-medium text-white/60 uppercase tracking-wide">{label}</span>
      </div>
      {children}
    </div>
  );

  if (!episode) {
    return (
      <div className="p-5 text-center">
        <p className="text-sm text-white/40 mb-4">暂无剧本数据</p>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium cursor-pointer transition-all"
          style={{ background: 'rgba(192,3,28,0.20)', color: '#FF4D4D' }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          生成剧本
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <Section icon={FileText} label="Script">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm font-medium text-white/80">{episode.title}</h4>
            <p className="text-[10px] text-white/40 mt-0.5">{episode.scenes.length} 个场景</p>
          </div>
          <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] text-white/60 hover:text-white/80 cursor-pointer transition-colors" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <Edit3 className="h-3 w-3" />
            编辑
          </button>
        </div>

        <div className="space-y-3">
          {episode.scenes.map((scene) => (
            <div key={scene.scene_number} className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{ background: 'rgba(192,3,28,0.20)', color: '#FF4D4D' }}
                >
                  场景 {String(scene.scene_number).padStart(2, '0')}
                </span>
                <span className="text-xs font-medium text-white/60">{scene.header}</span>
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed">{scene.description}</p>

              {/* Dialogue */}
              {scene.dialogue.length > 0 && (
                <div className="space-y-1 pl-2 border-l-2 border-[rgba(192,3,28,0.30)]">
                  {scene.dialogue.map((line, i) => (
                    <p key={i} className="text-[10px] text-white/70">{line}</p>
                  ))}
                </div>
              )}

              {/* VO */}
              {scene.vo_narration && (
                <div className="rounded-md px-2.5 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-[10px] text-white/40 italic">🎙 {scene.vo_narration}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer border border-white/10"
          style={{ background: 'transparent', color: 'rgba(255,255,255,0.60)' }}
        >
          重新生成
        </button>
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
          style={{ background: 'rgba(192,3,28,0.20)', color: '#FF4D4D' }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          确认剧本
        </button>
      </div>
    </div>
  );
}

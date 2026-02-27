'use client';

import { useProjectStore } from '@/stores/project-store';
import { useEffect } from 'react';
import { Sparkles, Volume2, Plus, User } from 'lucide-react';

export function CharacterPackDetail() {
  const { characters, voices, loadVoices } = useProjectStore();

  useEffect(() => {
    if (voices.length === 0) loadVoices();
  }, [voices.length, loadVoices]);

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
      <Section icon={User} label="Characters">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-white/40">{characters.length} 个角色</span>
          <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] text-white/60 hover:text-white/80 cursor-pointer transition-colors" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <Plus className="h-3 w-3" />
            添加角色
          </button>
        </div>

        <div className="space-y-3">
          {characters.map((char) => (
            <div
              key={char.id}
              className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-2"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center flex-shrink-0 border border-white/10">
                  {char.image_url ? (
                    <span className="text-xl">👤</span>
                  ) : (
                    <User className="h-5 w-5 text-white/20" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-white/80">{char.name}</h4>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded"
                      style={{
                        background: char.level === 'major' ? 'rgba(192,3,28,0.20)' : 'rgba(255,255,255,0.05)',
                        color: char.level === 'major' ? '#FF4D4D' : 'rgba(255,255,255,0.40)',
                      }}
                    >
                      {char.level === 'major' ? '主角' : char.level === 'supporting' ? '配角' : '龙套'}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/40 mt-0.5">{char.occupation}</p>
                  <div className="flex gap-1.5 mt-1 text-[10px] text-white/30">
                    <span>{char.gender}</span>
                    <span>·</span>
                    <span>{char.age}</span>
                    <span>·</span>
                    <span>{char.height}</span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-white/50 leading-relaxed">{char.brief_bio}</p>

              {/* Voice */}
              {char.voice_id && (
                <div className="flex items-center gap-2 rounded-md px-2.5 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <Volume2 className="h-3 w-3 text-[#FF4D4D]" />
                  <span className="text-[10px] text-white/60">
                    {voices.find((v) => v.id === char.voice_id)?.name || '未选择'}
                  </span>
                  <button className="ml-auto text-[10px] text-[#FF4D4D] hover:underline cursor-pointer">切换</button>
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
          确认角色集
        </button>
      </div>
    </div>
  );
}

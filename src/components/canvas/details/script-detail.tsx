'use client';

import React from 'react';
import { useProjectStore } from '@/stores/project-store';
import { Sparkles, Edit3, FileText } from 'lucide-react';
import { DetailSection } from '@/components/ui/detail-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ScriptData } from '@/types/canvas';
import { DEFAULT_SCRIPT_DATA } from '@/lib/defaults';

interface ScriptDetailProps {
  _nodeData?: ScriptData;
  _updateNode?: (patch: Partial<ScriptData>) => void;
  onNodeComplete?: () => void;
}

export const ScriptDetail = ({ _nodeData, _updateNode, onNodeComplete }: ScriptDetailProps) => {
  // data is initialized for API consistency but not used directly in this component
  const _data = { ...DEFAULT_SCRIPT_DATA, ..._nodeData };
  // updateNode is initialized for API consistency; fallback logs warning if not provided
  const _update = _updateNode || ((patch) => {
    console.warn('[ScriptDetail] updateNode not provided:', patch);
  });
  const { episodes } = useProjectStore();
  const episode = episodes[0];

  if (!episode) {
    return (
      <div className="p-5 text-center">
        <p className="text-sm text-[var(--drama-text-disabled)] mb-4">暂无剧本数据</p>
        <Button variant="default" size="sm">
          <Sparkles className="h-3.5 w-3.5" />
          生成剧本
        </Button>
      </div>
    );
  }

  return (
    <div className="p-5 space-y-5">
      <DetailSection icon={FileText} label="Script">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm font-medium text-[var(--drama-text-primary)]">{episode.title}</h4>
            <p className="text-[10px] text-[var(--drama-text-disabled)] mt-0.5">{episode.scenes.length} 个场景</p>
          </div>
          <Button variant="secondary" size="sm">
            <Edit3 className="h-3 w-3" />
            编辑
          </Button>
        </div>

        <div className="space-y-3">
          {episode.scenes.map((scene) => (
            <div key={scene.scene_number} className="rounded-xl border border-[var(--drama-border)] bg-[var(--drama-bg-white-5)] shadow-lg p-3 space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="default">
                  场景 {String(scene.scene_number).padStart(2, '0')}
                </Badge>
                <span className="text-xs font-medium text-[var(--drama-text-secondary)]">{scene.header}</span>
              </div>
              <p className="text-[10px] text-[var(--drama-text-muted)] leading-relaxed">{scene.description}</p>

              {/* Dialogue */}
              {scene.dialogue.length > 0 && (
                <div className="space-y-1 pl-2 border-l-2 border-[var(--drama-red-bg-30)]">
                  {scene.dialogue.map((line, i) => (
                    <p key={i} className="text-[10px] text-[var(--drama-text-secondary)]">{line}</p>
                  ))}
                </div>
              )}

              {/* VO */}
              {scene.vo_narration && (
                <div className="rounded-md px-2.5 py-1.5 bg-[var(--bg-white-5)]">
                  <p className="text-[10px] text-[var(--drama-text-disabled)] italic">🎙 {scene.vo_narration}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </DetailSection>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-3">
        <Button variant="outline" size="sm" className="flex-1">
          重新生成
        </Button>
        <Button variant="default" size="sm" className="flex-1" onClick={onNodeComplete}>
          <Sparkles className="h-3.5 w-3.5" />
          确认剧本
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ScriptDetail);

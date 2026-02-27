'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { getShowcaseItems } from '@/mock/api/showcase';
import { ShowcaseItem } from '@/mock/api/types';
import { Home, FolderOpen, Palette, Play, Eye } from 'lucide-react';

const TABS = [
  { id: 'all', label: '全部' },
  { id: 'video', label: '视频' },
  { id: 'image', label: '图片' },
];

export default function ShowcasesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      const res = await getShowcaseItems({ page: 1, page_size: 50, type: activeTab as 'all' | 'image' | 'video' });
      if (res.code === 200) {
        setItems(res.data.items);
      }
      setLoading(false);
    };
    loadItems();
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-20">
        <Logo onClick={() => router.push('/')} />
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.push('/projects')}>
            我的项目
          </Button>
          <Button size="sm" onClick={() => router.push('/')}>
            开始创作
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 px-6 py-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">The DreamX Lands</h1>
          <p className="text-sm text-white/40">探索 AI 生成的精彩作品</p>

          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all"
                style={{
                  background: activeTab === tab.id ? 'rgba(192,3,28,0.20)' : 'rgba(255,255,255,0.05)',
                  color: activeTab === tab.id ? '#FF4D4D' : 'rgba(255,255,255,0.60)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Waterfall Grid */}
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-[#C0031C] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40">暂无作品</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid rounded-xl border border-white/10 bg-white/5 overflow-hidden group cursor-pointer hover:border-white/20 transition-all"
                >
                  {/* Media */}
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02]">
                    {item.type === 'video' ? (
                      <div className="aspect-[9/16] flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[rgba(192,3,28,0.30)] transition-colors">
                          <Play className="h-5 w-5 text-white/60 group-hover:text-white" />
                        </div>
                        {item.duration && (
                          <span className="absolute bottom-2 right-2 text-[10px] text-white/60 bg-black/60 px-1.5 py-0.5 rounded">
                            {item.duration}s
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-square flex items-center justify-center">
                        <span className="text-4xl opacity-20">🎨</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-white/80 truncate">{item.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-[10px] text-white/40">
                        <Eye className="h-3 w-3" />
                        <span>{(item.views / 1000).toFixed(1)}K</span>
                      </div>
                      {item.project_type && (
                        <span className="inline-flex items-center rounded-full border border-white/15 px-2 py-0.5 text-[9px] h-4 text-white/40">
                          {item.project_type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 px-6 py-2 flex justify-around bg-black/80 backdrop-blur-xl z-50">
        {[
          { label: '首页', icon: Home, href: '/' },
          { label: '存档', icon: FolderOpen, href: '/projects' },
          { label: '资产', icon: Palette, href: '/showcases' },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = tab.href === '/showcases';
          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.href)}
              className="flex flex-col items-center gap-1 px-6 py-1 cursor-pointer group"
            >
              <div
                className="p-2 rounded-xl transition-all"
                style={{
                  background: active ? 'rgba(192,3,28,0.20)' : 'transparent',
                }}
              >
                <Icon
                  className="h-5 w-5 transition-colors"
                  style={{
                    color: active ? '#FF4D4D' : 'rgba(255,255,255,0.40)',
                  }}
                />
              </div>
              <span
                className="text-[11px] font-medium transition-colors"
                style={{
                  color: active ? '#FF4D4D' : 'rgba(255,255,255,0.40)',
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

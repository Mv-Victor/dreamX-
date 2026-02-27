'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coins, Image, Music, Video, Users, Search, Filter } from 'lucide-react';

const assetCategories = [
  { id: 'all', label: '全部', icon: null },
  { id: 'visual', label: '视觉风格', icon: Image },
  { id: 'voice', label: '配音', icon: Users },
  { id: 'music', label: '音乐', icon: Music },
  { id: 'video', label: '视频素材', icon: Video },
];

const mockAssets = [
  { id: 1, type: 'visual', name: 'Immersive Raw Realism', count: 1, preview: '🎨' },
  { id: 2, type: 'visual', name: 'Hong Kong Neo-Noir', count: 1, preview: '🌃' },
  { id: 3, type: 'voice', name: 'Marcus (EN Male)', count: 1, preview: '🎙' },
  { id: 4, type: 'voice', name: '霸道总裁 (CN Male)', count: 1, preview: '🎙' },
  { id: 5, type: 'music', name: 'Epic Orchestral', count: 1, preview: '🎵' },
  { id: 6, type: 'video', name: 'City Timelapse', count: 1, preview: '🎬' },
];

export default function AssetsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = mockAssets.filter((asset) => {
    if (activeCategory !== 'all' && asset.type !== activeCategory) return false;
    if (searchQuery && !asset.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <Logo className="cursor-pointer" onClick={() => router.push('/')} />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span className="text-white/80 font-medium">4,825</span>
          </div>
          <Badge variant="accent">STARTER</Badge>
          <Button size="sm" onClick={() => router.push('/projects')}>
            返回项目
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-white/90">资产库</h1>
            <p className="text-sm text-white/40 mt-1">管理你的视觉风格、配音、音乐等创作资源</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索资产..."
              className="w-full h-10 rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(192,3,28,0.40)] transition-all"
            />
          </div>
          <Button variant="outline" size="sm" className="h-10">
            <Filter className="h-4 w-4 mr-2" />
            筛选
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {assetCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[rgba(192,3,28,0.20)] text-[#FF4D4D] border border-[rgba(192,3,28,0.30)]'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer transition-all hover:border-white/20 hover:bg-white/8"
            >
              {/* Preview */}
              <div className="aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                <span className="text-5xl opacity-50">{asset.preview}</span>
              </div>
              
              {/* Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-white/80 truncate">{asset.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="secondary" className="text-[10px]">
                    {asset.type}
                  </Badge>
                  <span className="text-xs text-white/40">{asset.count} 个</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAssets.length === 0 && (
          <div className="text-center py-20">
            <Search className="h-12 w-12 text-white/20 mx-auto mb-4" />
            <p className="text-sm text-white/40">暂无资产</p>
            <p className="text-xs text-white/30 mt-1">尝试其他搜索词或分类</p>
          </div>
        )}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 px-6 py-2 flex justify-around bg-black/80 backdrop-blur-xl z-50">
        {[
          { label: '首页', icon: '🏠', active: false },
          { label: '存档', icon: '📁', active: false },
          { label: '资产', icon: '🎨', active: true },
        ].map((tab) => (
          <button
            key={tab.label}
            className="flex flex-col items-center gap-1 px-6 py-1 cursor-pointer group"
          >
            <div
              className="p-2 rounded-xl transition-all"
              style={{
                background: tab.active ? 'rgba(192,3,28,0.20)' : 'transparent',
              }}
            >
              <span className="text-xl">{tab.icon}</span>
            </div>
            <span
              className="text-[11px] font-medium transition-colors"
              style={{
                color: tab.active ? '#FF4D4D' : 'rgba(255,255,255,0.40)',
              }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}

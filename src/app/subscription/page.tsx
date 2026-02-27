'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coins, Check, ArrowRight, Zap, Star, Gift, Users } from 'lucide-react';

const subscriptionTiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: '永久免费',
    credits: 0,
    maxResolution: '720p',
    maxDuration: '60s',
    proModels: false,
    commercial: false,
    popular: false,
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 19.9,
    period: '月付',
    credits: 10000,
    maxResolution: '1080p',
    maxDuration: '60s',
    proModels: false,
    commercial: false,
    popular: false,
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 29.9,
    period: '月付',
    credits: 20000,
    maxResolution: '1080p',
    maxDuration: '120s',
    proModels: true,
    commercial: true,
    popular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59.9,
    period: '月付',
    credits: 40000,
    maxResolution: '1080p',
    maxDuration: '300s',
    proModels: true,
    commercial: true,
    popular: false,
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: 129.9,
    period: '月付',
    credits: 100000,
    maxResolution: '2K',
    maxDuration: '600s',
    proModels: true,
    commercial: true,
    popular: false,
  },
];

const tasks = [
  { id: 1, type: 'daily', title: '每日签到', reward: 100, icon: Zap, completed: false },
  { id: 2, type: 'daily', title: '分享项目', reward: 200, icon: Users, completed: false },
  { id: 3, type: 'achievement', title: '完成第一个项目', reward: 500, icon: Star, completed: true },
  { id: 4, type: 'achievement', title: '生成 10 个角色', reward: 1000, icon: Gift, completed: false },
];

export default function SubscriptionPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTaskTab, setActiveTaskTab] = useState<'daily' | 'achievement' | 'invite'>('daily');

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
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white/90 mb-2">选择你的创作计划</h1>
          <p className="text-sm text-white/40">解锁更多 AI 能力，创作更精彩的内容</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${activeTab === 'monthly' ? 'text-white/80' : 'text-white/40'}`}>月付</span>
            <button
              onClick={() => setActiveTab(activeTab === 'monthly' ? 'yearly' : 'monthly')}
              className="w-12 h-6 rounded-full bg-white/10 relative cursor-pointer transition-colors"
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-[#FF4D4D] transition-transform ${
                  activeTab === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${activeTab === 'yearly' ? 'text-white/80' : 'text-white/40'}`}>
              年付 <span className="text-[#FF4D4D] text-xs font-medium">省 50%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border p-5 transition-all ${
                tier.popular
                  ? 'border-[rgba(192,3,28,0.60)] bg-[rgba(192,3,28,0.05)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default">最受欢迎</Badge>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white/90">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white/90">${activeTab === 'yearly' ? Math.round(tier.price * 12 * 0.5) : tier.price}</span>
                  <span className="text-xs text-white/40">/{activeTab === 'yearly' ? '年' : '月'}</span>
                </div>
                <p className="text-xs text-white/40 mt-1">{tier.period}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <Coins className="h-3.5 w-3.5 text-yellow-500" />
                  <span className="text-white/60">{tier.credits.toLocaleString()} 积分/月</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-white/60">最大分辨率 {tier.maxResolution}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-white/60">最长时长 {tier.maxDuration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className={`h-3.5 w-3.5 ${tier.proModels ? 'text-green-500' : 'text-white/20'}`} />
                  <span className={tier.proModels ? 'text-white/60' : 'text-white/30'}>Pro 模型</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className={`h-3.5 w-3.5 ${tier.commercial ? 'text-green-500' : 'text-white/20'}`} />
                  <span className={tier.commercial ? 'text-white/60' : 'text-white/30'}>商用授权</span>
                </div>
              </div>

              <Button
                variant={tier.popular ? 'default' : 'outline'}
                size="sm"
                className="w-full"
              >
                {tier.price === 0 ? '当前计划' : '升级'}
              </Button>
            </div>
          ))}
        </div>

        {/* Task Center */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white/90">任务中心</h2>
              <p className="text-sm text-white/40 mt-0.5">完成任务赚取积分</p>
            </div>
            <Button variant="default" size="sm">
              分享邀请链接
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Task Tabs */}
          <div className="flex gap-1 rounded-lg p-1 bg-white/5 mb-4 w-fit">
            {[
              { id: 'daily', label: '每日任务' },
              { id: 'achievement', label: '成就' },
              { id: 'invite', label: '邀请' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTaskTab(tab.id as typeof activeTaskTab)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${
                  activeTaskTab === tab.id
                    ? 'bg-[rgba(192,3,28,0.20)] text-[#FF4D4D]'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Task List */}
          <div className="space-y-2">
            {tasks.filter((t) => t.type === activeTaskTab).map((task) => {
              const Icon = task.icon;
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(192,3,28,0.15)] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#FF4D4D]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/80">{task.title}</h4>
                      <p className="text-xs text-white/40 mt-0.5">
                        <span className="text-yellow-500 font-medium">+{task.reward}</span> 积分
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={task.completed ? 'secondary' : 'default'}
                    size="sm"
                    disabled={task.completed}
                  >
                    {task.completed ? '已完成' : '去完成'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

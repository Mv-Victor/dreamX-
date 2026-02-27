'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    // Mock register - redirect to login
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(192,3,28,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(255,77,77,0.10) 0%, transparent 70%)', animationDelay: '3s' }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        <Logo className="cursor-pointer" onClick={() => router.push('/')} />
        <Button variant="ghost" size="sm" onClick={() => router.push('/')}>
          返回首页
        </Button>
      </nav>

      {/* Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white/90 mb-2">创建账号</h1>
            <p className="text-sm text-white/40">注册 DreamX 账号开始你的创作之旅</p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5">昵称</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="你的昵称"
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(192,3,28,0.40)] focus:ring-1 focus:ring-[rgba(192,3,28,0.20)] transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5">邮箱</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(192,3,28,0.40)] focus:ring-1 focus:ring-[rgba(192,3,28,0.20)] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5">密码</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="至少 8 位"
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(192,3,28,0.40)] focus:ring-1 focus:ring-[rgba(192,3,28,0.20)] transition-all"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/50 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5">确认密码</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="再次输入密码"
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(192,3,28,0.40)] focus:ring-1 focus:ring-[rgba(192,3,28,0.20)] transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/50 cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#C0031C] focus:ring-[#C0031C] mt-0.5" required />
              <span className="text-xs text-white/40">
                我已阅读并同意{' '}
                <button type="button" className="text-[#FF4D4D] hover:underline cursor-pointer">服务条款</button>
                {' '}和{' '}
                <button type="button" className="text-[#FF4D4D] hover:underline cursor-pointer">隐私政策</button>
              </span>
            </label>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full h-11 rounded-xl bg-[rgba(192,3,28,0.20)] hover:bg-[rgba(192,3,28,0.25)] border border-[rgba(192,3,28,0.30)]">
              注册账号
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-white/40 mt-6">
            已有账号？{' '}
            <button onClick={() => router.push('/login')} className="text-[#FF4D4D] hover:underline font-medium cursor-pointer">
              立即登录
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

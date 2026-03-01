'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FilePlus, LogOut, Menu, X, Lock } from 'lucide-react'; 
import { useState, useEffect } from 'react';
import AdminPasscode from './components/AdminPasscode';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  
  // Change this to your desired code
  const CORRECT_PASSCODE = 'rayhan123'; 

  // Check if already authenticated in this session
  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('Invalid Passcode');
      setPasscode('');
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Create Post', href: '/admin/create-posts', icon: FilePlus }
  ];

  if (!isAuthenticated) {
    return <AdminPasscode handleAuth={handleAuth} passcode={passcode} setPasscode={setPasscode} />;
  }
  return (
    <div className="flex min-h-screen bg-[--background] text-[--foreground]">
      
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden md:flex w-72 border-r border-zinc-800 flex-col sticky top-0 h-screen p-6 bg-zinc-950/50 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" />
          <span className="font-black text-xl tracking-tighter">PORTFOLIO.OS</span>
        </div>
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-white text-black font-bold' : 'hover:bg-zinc-800/50 opacity-60 hover:opacity-100'}`}>
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    {/* --- Mobile Bottom Menu Button --- */}
    <button
      onClick={() => setIsMobileMenuOpen(true)}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform"
      aria-label="Open Menu"
    >
      <Menu size={26} />
    </button>
    <button
      onClick={() => setIsMobileMenuOpen(true)}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform"
      aria-label="Open Menu"
    >
      <Menu size={26} />
    </button>

      {/* --- Mobile Left-Side Drawer --- */}
      <div 
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside 
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-zinc-950 border-r border-zinc-800 z-50 p-6 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded" />
            <span className="font-black text-xl tracking-tighter italic">ADMIN</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-500">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl text-sm transition-all ${isActive ? 'bg-white text-black font-bold shadow-lg shadow-white/5' : 'bg-zinc-900/50 text-zinc-400'}`}
              >
                <item.icon size={22} /> {item.name}
              </Link>
            );
          })}
        </nav>

        <button 
          onClick={() => {
            sessionStorage.removeItem('admin_auth');
            setIsAuthenticated(false);
          }}
          className="flex items-center gap-4 p-4 text-red-500 font-medium absolute bottom-10 left-6 right-6 border border-red-500/20 rounded-xl bg-red-500/5 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-4 md:p-8 mt-8 mt-25 overflow-x-hidden min-h-screen">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
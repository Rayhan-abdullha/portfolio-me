import { Lock } from 'lucide-react';
import React from 'react'

const AdminPasscode = ({ handleAuth, passcode, setPasscode }: { handleAuth: (e: React.FormEvent) => void, passcode: string, setPasscode: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <form onSubmit={handleAuth} className="w-full max-w-sm space-y-8 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-blue-500">
              <Lock size={32} />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-zinc-500 text-sm">Please enter your administrative passcode</p>
          </div>
          <input 
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="••••"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center text-2xl tracking-[1em] outline-none focus:border-blue-500 transition-colors text-white"
            autoFocus
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
  )
}

export default AdminPasscode
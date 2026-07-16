'use client';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan rounded-xl flex items-center justify-center">
                <span className="text-xl">🎮</span>
              </div>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Gam34fun
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The ultimate AI-powered gaming platform. New games generated daily by our AI agents!
            </p>
            <div className="flex gap-3">
              {['🐦', '📘', '📸', '📺'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-lg transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'New Games', 'Popular', 'Categories', 'Submit Game'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Action', 'Adventure', 'Puzzle', 'Racing', 'Horror', 'Multiplayer'].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors text-sm">
                    {cat} Games
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© 2024 Gam34fun. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-400">100+ Games Online</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neon-cyan/20 border border-neon-cyan/30 rounded-full">
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              <span className="text-xs font-medium text-neon-cyan">AI Updating 24/7</span>
            </div>
          </div>
        </div>

        {/* AI Attribution */}
        <div className="mt-8 p-4 bg-gradient-to-r from-neon-pink/10 via-neon-purple/10 to-neon-cyan/10 rounded-xl border border-white/5 text-center">
          <p className="text-sm text-gray-400">
            🎮 Powered by <span className="text-neon-pink font-medium">AI Game Generation</span> • 
            New games created hourly by our 100+ sub-agents running 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}

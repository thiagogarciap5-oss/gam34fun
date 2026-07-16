'use client';

import { useState } from 'react';
import { initialGames } from '../lib/games';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const suggestions = searchQuery.length > 1 
    ? initialGames
        .filter(game => 
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🎮</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Gam34fun
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 hidden sm:block">
                AI-Powered Gaming
              </span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl mx-4 md:mx-8">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
              <input
                type="text"
                placeholder="Search 1000+ games..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setShowSuggestions(true);
                }}
                onBlur={() => {
                  setIsSearchFocused(false);
                  setTimeout(() => setShowSuggestions(false), 200);
                }}
                className="search-input w-full px-4 py-2.5 md:py-3 pl-12 md:pl-14 rounded-xl text-white placeholder-gray-500 text-sm md:text-base"
              />
              <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-dark-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-slide-up">
                {suggestions.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      onSearchChange(game.title);
                      setShowSuggestions(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="text-2xl">🎮</span>
                    <div>
                      <p className="text-white font-medium">{game.title}</p>
                      <p className="text-xs text-gray-400">{game.category} • {game.tags.slice(0, 2).join(', ')}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium">Submit Game</span>
            </button>
            
            <button className="relative p-2 md:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import type { Game } from '../lib/types';

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [gameError, setGameError] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // Simulate game loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // For demo, show error since we don't have actual game files
      setGameError(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categoryColors: Record<string, string> = {
    action: '#ff2d95',
    adventure: '#00f0ff',
    puzzle: '#8b5cf6',
    racing: '#ff6b35',
    sports: '#00ff88',
    strategy: '#ffd700',
    horror: '#ff0000',
    mystery: '#9932cc',
    arcade: '#ff69b4',
    rpg: '#cd853f',
    simulation: '#87ceeb',
    casual: '#98fb98',
    '2d': '#00ced1',
    '3d': '#daa520',
    multiplayer: '#4169e1',
  };

  const accentColor = categoryColors[game.category] || '#ff2d95';

  return (
    <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-slide-up">
        {/* Header */}
        <div 
          className="px-6 py-4 flex items-center justify-between border-b border-white/10"
          style={{ background: `linear-gradient(90deg, ${accentColor}20, transparent)` }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${accentColor}30` }}
            >
              {game.category === 'action' && '⚔️'}
              {game.category === 'adventure' && '🗺️'}
              {game.category === 'puzzle' && '🧩'}
              {game.category === 'racing' && '🏎️'}
              {game.category === 'sports' && '⚽'}
              {game.category === 'strategy' && '♟️'}
              {game.category === 'horror' && '👻'}
              {game.category === 'mystery' && '🔍'}
              {game.category === 'arcade' && '🕹️'}
              {game.category === 'rpg' && '⚔️'}
              {game.category === 'simulation' && '🏗️'}
              {game.category === 'casual' && '🎯'}
              {game.category === '2d' && '📱'}
              {game.category === '3d' && '🎲'}
              {game.category === 'multiplayer' && '👥'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{game.title}</h2>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span 
                  className="px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
                >
                  {game.category}
                </span>
                {game.rating && (
                  <span className="flex items-center gap-1">
                    ⭐ {game.rating}
                  </span>
                )}
                <span>{game.plays?.toLocaleString() || '0'} plays</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Game Container */}
        <div className="relative aspect-video bg-black">
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 spinner" />
              <p className="text-gray-400">Loading game...</p>
            </div>
          ) : gameError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
              <div className="text-6xl">🎮</div>
              <h3 className="text-2xl font-bold text-white">Game Preview</h3>
              <p className="text-gray-400 text-center max-w-md">
                {game.description}
              </p>
              <div className="mt-4 p-4 bg-dark-700/50 rounded-xl border border-white/10 text-center">
                <p className="text-sm text-gray-300 mb-2">Controls:</p>
                <p className="text-white font-medium">{game.controls}</p>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Full game will be available once deployed with AI-generated games
              </p>
            </div>
          ) : (
            <iframe
              src={game.gameUrl}
              className="w-full h-full border-0"
              title={game.title}
              allow="gamepad *; fullscreen *; pointer-lock"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2 text-sm text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Favorite
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2 text-sm text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

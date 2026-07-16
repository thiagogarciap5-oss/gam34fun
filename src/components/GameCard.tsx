'use client';

import type { Game } from '../lib/types';

interface GameCardProps {
  game: Game;
  onPlay: () => void;
  style?: React.CSSProperties;
}

export default function GameCard({ game, onPlay, style }: GameCardProps) {
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
    <div 
      className="game-card bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl overflow-hidden border border-white/5 cursor-pointer group animate-slide-up"
      onClick={onPlay}
      style={style}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {/* Placeholder Gradient Background */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}20, #1a1a2560)`
          }}
        />
        
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`grid-${game.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#grid-${game.id})`} />
          </svg>
        </div>

        {/* Game Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
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
          </span>
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
            <svg className="w-8 h-8 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <span 
            className="px-2 py-1 rounded-md text-[10px] font-bold uppercase text-white"
            style={{ backgroundColor: accentColor }}
          >
            {game.category}
          </span>
          {game.new && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-neon-cyan text-black">
              NEW
            </span>
          )}
          {game.featured && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-gradient-to-r from-neon-pink to-neon-purple text-white">
              ⭐ FEATURED
            </span>
          )}
        </div>

        {/* Rating */}
        {game.rating && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-bold text-white">{game.rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-white text-base md:text-lg mb-1 truncate group-hover:text-neon-pink transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-3 line-clamp-2">
          {game.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded text-[10px] font-medium text-white/80"
              style={{ backgroundColor: `${accentColor}30` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{game.plays?.toLocaleString() || '0'} plays</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Date(game.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
}

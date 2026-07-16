'use client';

import type { Game } from '../lib/types';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  isLoading: boolean;
  onPlayGame: (game: Game) => void;
  compact?: boolean;
}

export default function GameGrid({ games, isLoading, onPlayGame, compact = false }: GameGridProps) {
  if (isLoading) {
    return (
      <div className={`grid gap-4 md:gap-6 ${compact ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'}`}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-dark-700 rounded-2xl overflow-hidden animate-pulse">
            <div className="aspect-video skeleton" />
            <div className="p-4 space-y-3">
              <div className="h-6 skeleton rounded-lg w-3/4" />
              <div className="h-4 skeleton rounded w-full" />
              <div className="flex gap-2">
                <div className="h-6 skeleton rounded-full w-16" />
                <div className="h-6 skeleton rounded-full w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🎮</div>
        <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
        <p className="text-gray-400">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-4 md:gap-6 animate-fade-in ${compact ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'}`}>
      {games.map((game, index) => (
        <GameCard
          key={game.id}
          game={game}
          onPlay={() => onPlayGame(game)}
          style={{ animationDelay: `${index * 0.05}s` }}
        />
      ))}
    </div>
  );
}

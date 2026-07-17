export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  tags: string[];
  thumbnail: string;
  gameUrl: string;
  featured?: boolean;
  new?: boolean;
  rating?: number;
  plays?: number;
  dimensions?: {
    width: number;
    height: number;
  };
  controls?: string;
  createdAt: string;
}

export type GameCategory = 
  | 'action'
  | 'adventure'
  | 'puzzle'
  | 'racing'
  | 'sports'
  | 'strategy'
  | 'horror'
  | 'mystery'
  | 'arcade'
  | 'rpg'
  | 'simulation'
  | 'casual'
  | '2d'
  | '3d'
  | 'multiplayer';

export const CATEGORIES: { id: GameCategory; label: string; emoji: string; color: string }[] = [
  { id: 'action', label: 'Action', emoji: '🎮', color: '#ff2d95' },
  { id: 'adventure', label: 'Adventure', emoji: '🗺️', color: '#00f0ff' },
  { id: 'puzzle', label: 'Puzzle', emoji: '🧩', color: '#8b5cf6' },
  { id: 'racing', label: 'Racing', emoji: '🏎️', color: '#ff6b35' },
  { id: 'sports', label: 'Sports', emoji: '⚽', color: '#00ff88' },
  { id: 'strategy', label: 'Strategy', emoji: '♟️', color: '#ffd700' },
  { id: 'horror', label: 'Horror', emoji: '👻', color: '#ff0000' },
  { id: 'mystery', label: 'Mystery', emoji: '🔍', color: '#9932cc' },
  { id: 'arcade', label: 'Arcade', emoji: '🕹️', color: '#ff69b4' },
  { id: 'rpg', label: 'RPG', emoji: '⚔️', color: '#cd853f' },
  { id: 'simulation', label: 'Simulation', emoji: '🏗️', color: '#87ceeb' },
  { id: 'casual', label: 'Casual', emoji: '🎯', color: '#98fb98' },
  { id: '2d', label: '2D Games', emoji: '📱', color: '#00ced1' },
  { id: '3d', label: '3D Games', emoji: '🎲', color: '#daa520' },
  { id: 'multiplayer', label: 'Multiplayer', emoji: '👥', color: '#4169e1' },
];

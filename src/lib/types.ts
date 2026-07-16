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

export const CATEGORIES: { id: GameCategory; label: string; icon: string; color: string }[] = [
  { id: 'action', label: 'Action', icon: '🎮', color: '#ff2d95' },
  { id: 'adventure', label: 'Adventure', icon: '🗺️', color: '#00f0ff' },
  { id: 'puzzle', label: 'Puzzle', icon: '🧩', color: '#8b5cf6' },
  { id: 'racing', label: 'Racing', icon: '🏎️', color: '#ff6b35' },
  { id: 'sports', label: 'Sports', icon: '⚽', color: '#00ff88' },
  { id: 'strategy', label: 'Strategy', icon: '♟️', color: '#ffd700' },
  { id: 'horror', label: 'Horror', icon: '👻', color: '#ff0000' },
  { id: 'mystery', label: 'Mystery', icon: '🔍', color: '#9932cc' },
  { id: 'arcade', label: 'Arcade', icon: '🕹️', color: '#ff69b4' },
  { id: 'rpg', label: 'RPG', icon: '⚔️', color: '#cd853f' },
  { id: 'simulation', label: 'Simulation', icon: '🏗️', color: '#87ceeb' },
  { id: 'casual', label: 'Casual', icon: '🎯', color: '#98fb98' },
  { id: '2d', label: '2D Games', icon: '📱', color: '#00ced1' },
  { id: '3d', label: '3D Games', icon: '🎲', color: '#daa520' },
  { id: 'multiplayer', label: 'Multiplayer', icon: '👥', color: '#4169e1' },
];

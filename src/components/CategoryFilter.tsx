'use client';

import { CATEGORIES, GameCategory } from '../lib/types';

interface CategoryFilterProps {
  selectedCategory: GameCategory | 'all';
  onCategoryChange: (category: GameCategory | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
      <div className="flex gap-3 min-w-max">
        {/* All Categories */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`category-badge px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${
            selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white border-transparent' 
              : 'text-white'
          }`}
        >
          <span className="text-lg">🎮</span>
          <span className="font-medium">All Games</span>
        </button>

        {/* Category Buttons */}
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-badge px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${
              selectedCategory === category.id 
                ? 'text-white border-transparent' 
                : 'text-white'
            }`}
          >
            <span className="text-lg">{category.emoji}</span>
            <span className="font-medium">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

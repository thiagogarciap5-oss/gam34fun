'use client';

import { useState, useEffect, useMemo } from 'react';
import { initialGames } from '../lib/games';
import { CATEGORIES, GameCategory } from '../lib/types';
import type { Game } from '../lib/types';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GameGrid from '../components/GameGrid';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import GameModal from '../components/GameModal';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>('all');
  const [games, setGames] = useState<Game[]>(initialGames);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter games based on search and category
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  // Get featured games
  const featuredGames = useMemo(() => {
    return games.filter(game => game.featured).slice(0, 6);
  }, [games]);

  // Get new games
  const newGames = useMemo(() => {
    return games.filter(game => game.new).slice(0, 8);
  }, [games]);

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-pink animate-float" style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
        <div className="orb orb-purple animate-float" style={{ top: '60%', right: '10%', animationDelay: '2s' }} />
        <div className="orb orb-cyan animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '4s' }} />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Header 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        {searchQuery || selectedCategory !== 'all' ? (
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-white mb-2">
                {searchQuery ? `Search results for "${searchQuery}"` : `${CATEGORIES.find(c => c.id === selectedCategory)?.label || 'All'} Games`}
              </h2>
              <p className="text-gray-400">
                {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} found
              </p>
            </div>

            <GameGrid 
              games={filteredGames} 
              isLoading={isLoading}
              onPlayGame={handlePlayGame}
            />
          </div>
        ) : (
          <>
            <Hero featuredGames={featuredGames} onPlayGame={handlePlayGame} />
            
            <div className="container mx-auto px-4 py-12">
              <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-display font-bold neon-text-pink">
                    🆕 New Releases
                  </h2>
                  <span className="text-sm text-gray-400 animate-pulse">Updated hourly</span>
                </div>
                <GameGrid 
                  games={newGames} 
                  isLoading={isLoading}
                  onPlayGame={handlePlayGame}
                  compact
                />
              </section>

              <section className="mb-16">
                <CategoryFilter 
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold neon-text-cyan mb-6">
                  🎮 All Games
                </h2>
                <GameGrid 
                  games={games} 
                  isLoading={isLoading}
                  onPlayGame={handlePlayGame}
                />
              </section>
            </div>
          </>
        )}

        <Footer />
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal 
          game={selectedGame} 
          onClose={handleCloseModal} 
        />
      )}
    </main>
  );
}

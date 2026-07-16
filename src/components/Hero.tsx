'use client';

import { useState, useEffect } from 'react';
import type { Game } from '../lib/types';

interface HeroProps {
  featuredGames: Game[];
  onPlayGame: (game: Game) => void;
}

export default function Hero({ featuredGames, onPlayGame }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (featuredGames.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredGames.length]);

  const currentGame = featuredGames[currentSlide];

  if (!currentGame) return null;

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-dark-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/20 border border-neon-pink/30 mb-6">
              <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neon-pink">Featured Game</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                {currentGame.title}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
              {currentGame.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {currentGame.tags.map((tag) => (
                <span key={tag} className="category-badge px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 justify-center lg:justify-start mb-8">
              {currentGame.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-xl font-bold text-white">{currentGame.rating}</span>
                </div>
              )}
              {currentGame.plays && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👾</span>
                  <span className="text-lg text-gray-300">{currentGame.plays.toLocaleString()} plays</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onPlayGame(currentGame)}
                className="btn-neon px-8 py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Now
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Game Preview */}
          <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group cursor-pointer" onClick={() => onPlayGame(currentGame)}>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Game Card */}
              <div className="relative bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-4 border border-white/10 overflow-hidden">
                {/* Mock Game Preview */}
                <div className="aspect-video bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/20 to-neon-cyan/20 animate-pulse" />
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-pink/80 rounded-full text-xs font-bold text-white">
                    {currentGame.category.toUpperCase()}
                  </div>
                  {currentGame.new && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-neon-cyan/80 rounded-full text-xs font-bold text-black">
                      NEW
                    </div>
                  )}
                </div>

                {/* Game Info */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg">{currentGame.title}</h3>
                    <p className="text-sm text-gray-400">{currentGame.controls}</p>
                  </div>
                  <div className="text-3xl">🎮</div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-gradient-to-r from-neon-pink to-neon-purple' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}

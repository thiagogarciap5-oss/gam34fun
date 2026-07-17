'use client';

import { useState, useMemo } from 'react';
import { initialGames } from '../lib/games';
import { CATEGORIES } from '../lib/types';
import type { Game } from '../lib/types';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGames = useMemo(() => {
    return initialGames.filter((game) => {
      const matchesSearch = 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePlayGame = (game: Game) => {
    // Open the game in a new tab
    window.open(game.gameUrl || `/games/${game.id}/index.html`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      {/* Simple Header */}
      <div style={{ backgroundColor: '#fff', padding: '16px', borderBottom: '1px solid #ddd', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>GameHub</h1>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 16px', 
                border: '1px solid #ddd', 
                borderRadius: '24px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: selectedCategory === 'all' ? '2px solid #333' : '1px solid #ddd',
            backgroundColor: selectedCategory === 'all' ? '#333' : '#fff',
            color: selectedCategory === 'all' ? '#fff' : '#333',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          All Games
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: selectedCategory === cat.id ? '2px solid #333' : '1px solid #ddd',
              backgroundColor: selectedCategory === cat.id ? '#333' : '#fff',
              color: selectedCategory === cat.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '20px' 
        }}>
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => handlePlayGame(game)}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ 
                aspectRatio: '16/9', 
                backgroundColor: '#ddd',
                backgroundImage: `url(${game.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{game.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
            <p style={{ fontSize: '18px' }}>No games found</p>
          </div>
        )}
      </div>

      {/* Simple Footer */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto 0', 
        padding: '20px', 
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        color: '#666',
        fontSize: '13px'
      }}>
        <p>GameHub - Play free games online</p>
      </div>
    </div>
  );
}

#!/usr/bin/env python3
"""
AI Game Generator for Gam34fun
This script generates HTML5 games using AI templates and saves them to the games directory.
"""

import json
import random
import os
from datetime import datetime
from pathlib import Path

# Game templates for different categories
GAME_TEMPLATES = {
    "action": [
        {
            "name": "Neon Shooter",
            "type": "shooter",
            "mechanics": ["keyboard", "mouse", "collision"],
            "difficulty": "medium"
        },
        {
            "name": "Speed Runner",
            "type": "runner",
            "mechanics": ["keyboard", "obstacles", "collectibles"],
            "difficulty": "hard"
        },
        {
            "name": "Fighter Arena",
            "type": "fighter",
            "mechanics": ["keyboard", "combo", "enemies"],
            "difficulty": "medium"
        }
    ],
    "puzzle": [
        {
            "name": "Block Match",
            "type": "match3",
            "mechanics": ["mouse", "match", "cascade"],
            "difficulty": "easy"
        },
        {
            "name": "Logic Labyrinth",
            "type": "maze",
            "mechanics": ["keyboard", "pathfinding", "timer"],
            "difficulty": "medium"
        },
        {
            "name": "Color Switch",
            "type": "timing",
            "mechanics": ["click", "timing", "obstacles"],
            "difficulty": "hard"
        }
    ],
    "arcade": [
        {
            "name": "Retro Blaster",
            "type": "shooter",
            "mechanics": ["keyboard", "waves", "powerups"],
            "difficulty": "medium"
        },
        {
            "name": "Snake Classic",
            "type": "snake",
            "mechanics": ["keyboard", "grow", "walls"],
            "difficulty": "easy"
        },
        {
            "name": "Breakout Ultra",
            "type": "brick-breaker",
            "mechanics": ["mouse", "bounce", "powerups"],
            "difficulty": "medium"
        }
    ],
    "horror": [
        {
            "name": "Dark Escape",
            "type": "escape",
            "mechanics": ["keyboard", "flashlight", "puzzles"],
            "difficulty": "hard"
        },
        {
            "name": "Ghost Hunter",
            "type": "shooter",
            "mechanics": ["mouse", "ghosts", "limited-ammo"],
            "difficulty": "medium"
        }
    ],
    "mystery": [
        {
            "name": "Detective Files",
            "type": "point-click",
            "mechanics": ["mouse", "clues", "dialogue"],
            "difficulty": "medium"
        },
        {
            "name": "Escape Room X",
            "type": "escape",
            "mechanics": ["mouse", "puzzles", "timer"],
            "difficulty": "hard"
        }
    ],
    "adventure": [
        {
            "name": "Pixel Quest",
            "type": "platformer",
            "mechanics": ["keyboard", "platforms", "collectibles"],
            "difficulty": "medium"
        },
        {
            "name": "Treasure Hunter",
            "type": "exploration",
            "mechanics": ["keyboard", "map", "traps"],
            "difficulty": "medium"
        }
    ],
    "racing": [
        {
            "name": "Turbo Drift",
            "type": "racing",
            "mechanics": ["keyboard", "drift", "obstacles"],
            "difficulty": "medium"
        },
        {
            "name": "Street Race",
            "type": "racing",
            "mechanics": ["keyboard", "speed", " opponents"],
            "difficulty": "hard"
        }
    ],
    "sports": [
        {
            "name": "Street Ball",
            "type": "basketball",
            "mechanics": ["mouse", "aim", "timing"],
            "difficulty": "medium"
        },
        {
            "name": "Soccer Kick",
            "type": "soccer",
            "mechanics": ["mouse", "angle", "power"],
            "difficulty": "easy"
        }
    ],
    "strategy": [
        {
            "name": "Tower Defense Pro",
            "type": "tower-defense",
            "mechanics": ["mouse", "placement", "waves"],
            "difficulty": "medium"
        },
        {
            "name": "Kingdom Clash",
            "type": "strategy",
            "mechanics": ["mouse", "resources", "units"],
            "difficulty": "hard"
        }
    ],
    "casual": [
        {
            "name": "Bubble Pop",
            "type": "bubble-shooter",
            "mechanics": ["mouse", "aim", "pop"],
            "difficulty": "easy"
        },
        {
            "name": "Match Mania",
            "type": "match3",
            "mechanics": ["mouse", "swap", "score"],
            "difficulty": "easy"
        }
    ],
    "2d": [
        {
            "name": "Side Scroller X",
            "type": "platformer",
            "mechanics": ["keyboard", "jump", "enemies"],
            "difficulty": "medium"
        }
    ],
    "3d": [
        {
            "name": "3D Maze Runner",
            "type": "3d-runner",
            "mechanics": ["keyboard", "mouse", "obstacles"],
            "difficulty": "hard"
        }
    ],
    "rpg": [
        {
            "name": "Dungeon Quest",
            "type": "rpg",
            "mechanics": ["keyboard", "combat", "loot"],
            "difficulty": "medium"
        }
    ],
    "simulation": [
        {
            "name": "City Builder Sim",
            "type": "simulation",
            "mechanics": ["mouse", "build", "manage"],
            "difficulty": "medium"
        }
    ],
    "multiplayer": [
        {
            "name": "Battle Arena",
            "type": "multiplayer-arena",
            "mechanics": ["keyboard", "mouse", "teams"],
            "difficulty": "medium"
        }
    ]
}

# Game name prefixes and suffixes
NAME_PREFIXES = ["Super", "Epic", "Ultra", "Mega", "Hyper", "Neo", "Cyber", "Neon", "Pixel", "Retro", "Turbo", "Extreme", "Pro", "Max", "Elite"]
NAME_SUFFIXES = ["Blast", "Rush", "Fury", "Quest", "Saga", "Wars", "League", "Champions", "Masters", "Legends", "Arcade", "Mania", "Fever", "Storm", "Force"]
NAME_MIDDLES = ["Gamer", "Runner", "Fighter", "Shooter", "Racer", "Blaster", "Warrior", "Hunter", "Knight", "Dragon"]

# Color themes
COLOR_THEMES = [
    {"primary": "#ff2d95", "secondary": "#8b5cf6", "accent": "#00f0ff"},
    {"primary": "#00ff88", "secondary": "#00f0ff", "accent": "#ffd700"},
    {"primary": "#ff6b35", "secondary": "#ffd700", "accent": "#ff2d95"},
    {"primary": "#8b5cf6", "secondary": "#ff2d95", "accent": "#00ff88"},
    {"primary": "#00f0ff", "secondary": "#00ff88", "accent": "#ff6b35"},
]

def generate_game_name():
    """Generate a unique game name."""
    style = random.choice(["prefix", "suffix", "middle"])
    if style == "prefix":
        return f"{random.choice(NAME_PREFIXES)} {random.choice(NAME_MIDDLES)}"
    elif style == "suffix":
        return f"{random.choice(NAME_MIDDLES)} {random.choice(NAME_SUFFIXES)}"
    else:
        return f"{random.choice(NAME_PREFIXES)} {random.choice(NAME_MIDDLES)} {random.choice(NAME_SUFFIXES)}"

def generate_game_id(title):
    """Generate a URL-friendly game ID."""
    return title.lower().replace(" ", "-").replace(":", "").replace("'", "")

def generate_html_game(template, title, color_theme):
    """Generate HTML game code based on template."""
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        body {{
            background: linear-gradient(135deg, #0a0a0f, #1a1a25);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', sans-serif;
            overflow: hidden;
        }}
        #game-container {{
            position: relative;
            width: 800px;
            height: 600px;
            background: linear-gradient(180deg, #12121a 0%, #1a1a25 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 0 40px {color_theme["primary"]}40, 0 0 80px {color_theme["secondary"]}20;
            border: 2px solid {color_theme["primary"]}40;
        }}
        #game-canvas {{
            display: block;
        }}
        #ui-overlay {{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
            pointer-events: none;
        }}
        .score-display {{
            color: {color_theme["accent"]};
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 0 10px {color_theme["accent"]};
        }}
        .level-display {{
            color: {color_theme["primary"]};
            font-size: 18px;
            font-weight: bold;
        }}
        #start-screen, #game-over-screen {{
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(10, 10, 15, 0.95);
            z-index: 10;
        }}
        .game-title {{
            font-size: 48px;
            font-weight: 900;
            background: linear-gradient(135deg, {color_theme["primary"]}, {color_theme["secondary"]}, {color_theme["accent"]});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            text-shadow: none;
        }}
        .game-subtitle {{
            color: #888;
            font-size: 18px;
            margin-bottom: 40px;
        }}
        .play-btn {{
            padding: 16px 48px;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background: linear-gradient(135deg, {color_theme["primary"]}, {color_theme["secondary"]});
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }}
        .play-btn:hover {{
            transform: scale(1.05);
            box-shadow: 0 0 30px {color_theme["primary"]}60;
        }}
        .instructions {{
            margin-top: 30px;
            color: #666;
            font-size: 14px;
        }}
        .hidden {{
            display: none !important;
        }}
    </style>
</head>
<body>
    <div id="game-container">
        <canvas id="game-canvas" width="800" height="600"></canvas>
        <div id="ui-overlay">
            <div class="score-display">Score: <span id="score">0</span></div>
            <div class="level-display">Level: <span id="level">1</span></div>
        </div>
        <div id="start-screen">
            <div class="game-title">{title}</div>
            <div class="game-subtitle">An AI-Generated Game</div>
            <button class="play-btn" onclick="startGame()">PLAY</button>
            <div class="instructions">Use arrow keys or WASD to move • Collect items • Avoid enemies</div>
        </div>
        <div id="game-over-screen" class="hidden">
            <div class="game-title">GAME OVER</div>
            <div class="game-subtitle">Final Score: <span id="final-score">0</span></div>
            <button class="play-btn" onclick="startGame()">PLAY AGAIN</button>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('game-canvas');
        const ctx = canvas.getContext('2d');
        const scoreEl = document.getElementById('score');
        const levelEl = document.getElementById('level');
        const finalScoreEl = document.getElementById('final-score');
        const startScreen = document.getElementById('start-screen');
        const gameOverScreen = document.getElementById('game-over-screen');

        const primaryColor = '{color_theme["primary"]}';
        const secondaryColor = '{color_theme["secondary"]}';
        const accentColor = '{color_theme["accent"]}';

        let gameRunning = false;
        let score = 0;
        let level = 1;
        let player, collectibles, enemies, particles;
        let keys = {{}};

        class Player {{
            constructor() {{
                this.x = 400;
                this.y = 300;
                this.size = 30;
                this.speed = 5;
                this.color = primaryColor;
            }}
            update() {{
                if (keys['ArrowUp'] || keys['KeyW']) this.y -= this.speed;
                if (keys['ArrowDown'] || keys['KeyS']) this.y += this.speed;
                if (keys['ArrowLeft'] || keys['KeyA']) this.x -= this.speed;
                if (keys['ArrowRight'] || keys['KeyD']) this.x += this.speed;
                this.x = Math.max(this.size, Math.min(canvas.width - this.size, this.x));
                this.y = Math.max(this.size, Math.min(canvas.height - this.size, this.y));
            }}
            draw() {{
                ctx.save();
                ctx.shadowBlur = 20;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = accentColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }}
        }}

        class Collectible {{
            constructor() {{
                this.x = Math.random() * (canvas.width - 40) + 20;
                this.y = Math.random() * (canvas.height - 40) + 20;
                this.size = 15;
                this.pulse = 0;
            }}
            update() {{
                this.pulse += 0.1;
            }}
            draw() {{
                const size = this.size + Math.sin(this.pulse) * 3;
                ctx.save();
                ctx.shadowBlur = 15;
                ctx.shadowColor = accentColor;
                ctx.fillStyle = accentColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }}
        }}

        class Enemy {{
            constructor() {{
                this.x = Math.random() < 0.5 ? -30 : canvas.width + 30;
                this.y = Math.random() * canvas.height;
                this.size = 20 + level * 2;
                this.speed = 2 + level * 0.5;
                this.vx = this.x < 0 ? this.speed : -this.speed;
                this.vy = (Math.random() - 0.5) * this.speed;
            }}
            update() {{
                this.x += this.vx;
                this.y += this.vy;
                if (this.y < this.size || this.y > canvas.height - this.size) this.vy *= -1;
            }}
            draw() {{
                ctx.save();
                ctx.shadowBlur = 15;
                ctx.shadowColor = secondaryColor;
                ctx.fillStyle = secondaryColor;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y - this.size);
                ctx.lineTo(this.x + this.size, this.y + this.size);
                ctx.lineTo(this.x - this.size, this.y + this.size);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }}
        }}

        class Particle {{
            constructor(x, y, color) {{
                this.x = x;
                this.y = y;
                this.color = color;
                this.size = Math.random() * 5 + 2;
                this.speedX = (Math.random() - 0.5) * 8;
                this.speedY = (Math.random() - 0.5) * 8;
                this.life = 1;
            }}
            update() {{
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.02;
            }}
            draw() {{
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }}
        }}

        function init() {{
            player = new Player();
            collectibles = [];
            enemies = [];
            particles = [];
            for (let i = 0; i < 5 + level; i++) collectibles.push(new Collectible());
            for (let i = 0; i < 2 + level; i++) enemies.push(new Enemy());
        }}

        function spawnParticles(x, y, color, count) {{
            for (let i = 0; i < count; i++) {{
                particles.push(new Particle(x, y, color));
            }}
        }}

        function checkCollision(a, b) {{
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy) < a.size + b.size;
        }}

        function gameLoop() {{
            if (!gameRunning) return;

            ctx.fillStyle = 'rgba(18, 18, 26, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            player.update();
            player.draw();

            collectibles.forEach((c, i) => {{
                c.update();
                c.draw();
                if (checkCollision(player, c)) {{
                    spawnParticles(c.x, c.y, accentColor, 10);
                    collectibles.splice(i, 1);
                    score += 100;
                    scoreEl.textContent = score;
                    collectibles.push(new Collectible());
                }}
            }});

            enemies.forEach(e => {{
                e.update();
                e.draw();
                if (checkCollision(player, e)) {{
                    gameOver();
                    return;
                }}
            }});

            particles = particles.filter(p => {{
                p.update();
                p.draw();
                return p.life > 0;
            }});

            if (score > level * 500) {{
                level++;
                levelEl.textContent = level;
                enemies.push(new Enemy());
            }}

            requestAnimationFrame(gameLoop);
        }}

        function startGame() {{
            startScreen.classList.add('hidden');
            gameOverScreen.classList.add('hidden');
            score = 0;
            level = 1;
            scoreEl.textContent = '0';
            levelEl.textContent = '1';
            init();
            gameRunning = true;
            gameLoop();
        }}

        function gameOver() {{
            gameRunning = false;
            finalScoreEl.textContent = score;
            gameOverScreen.classList.remove('hidden');
        }}

        document.addEventListener('keydown', e => keys[e.code] = true);
        document.addEventListener('keyup', e => keys[e.code] = false);
    </script>
</body>
</html>'''
    return html

def save_game(game_data, output_dir):
    """Save the generated game to a file."""
    game_id = game_data["id"]
    game_path = Path(output_dir) / game_id
    game_path.mkdir(parents=True, exist_ok=True)
    
    # Save HTML file
    html_path = game_path / "index.html"
    with open(html_path, "w") as f:
        f.write(game_data["html"])
    
    # Save metadata
    metadata = {
        "id": game_id,
        "title": game_data["title"],
        "description": game_data["description"],
        "category": game_data["category"],
        "tags": game_data["tags"],
        "controls": game_data["controls"],
        "difficulty": game_data["difficulty"],
        "generated_at": datetime.now().isoformat(),
        "ai_generated": True
    }
    
    metadata_path = game_path / "metadata.json"
    with open(metadata_path, "w") as f:
        json.dump(metadata, f, indent=2)
    
    return game_path

def generate_new_game(categories=None):
    """Generate a new game with random parameters."""
    if categories is None:
        categories = list(GAME_TEMPLATES.keys())
    
    # Select random category and template
    category = random.choice(categories)
    template = random.choice(GAME_TEMPLATES[category])
    
    # Generate unique name
    title = generate_game_name()
    
    # Select random color theme
    color_theme = random.choice(COLOR_THEMES)
    
    # Generate HTML game
    html = generate_html_game(template, title, color_theme)
    
    # Generate description and tags
    descriptions = [
        f"An exciting {template['type'].replace('-', ' ')} game with {template['difficulty']} difficulty",
        f"Test your skills in this fast-paced {category} game",
        f"Challenge yourself with this epic {template['type'].replace('-', ' ')} adventure"
    ]
    
    game_data = {
        "id": generate_game_id(title),
        "title": title,
        "description": random.choice(descriptions),
        "category": category,
        "tags": [category, template["type"].replace("-", " "), template["difficulty"]],
        "controls": "Arrow keys / WASD to move",
        "difficulty": template["difficulty"],
        "html": html
    }
    
    return game_data

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description="Generate AI games for Gam34fun")
    parser.add_argument("--count", type=int, default=1, help="Number of games to generate")
    parser.add_argument("--category", type=str, help="Specific category to generate for")
    parser.add_argument("--output", type=str, default="public/games", help="Output directory")
    
    args = parser.parse_args()
    
    categories = [args.category] if args.category else None
    
    print(f"🎮 Generating {args.count} AI game(s)...")
    
    for i in range(args.count):
        game = generate_new_game(categories)
        path = save_game(game, args.output)
        print(f"✅ Generated: {game['title']} ({game['category']}) -> {path}")
    
    print(f"\n✨ Done! Generated {args.count} game(s).")

if __name__ == "__main__":
    main()

# 🎮 Gam34fun - AI-Powered Gaming Platform

> A Poki.com-like gaming platform with 100+ AI-generated games, featuring real-time game creation by sub-agents running 24/7.

![Gam34fun Banner](https://img.shields.io/badge/Gam34fun-Gaming%20Platform-ff2d95?style=for-the-badge&logo=gamepad&logoColor=white)

## ✨ Features

- **1000+ Games** - Vast library of games across all genres
- **AI Game Generation** - 100 sub-agents creating new games 24/7
- **Hourly Updates** - Fresh content every hour
- **Smart Search** - Find games by name, category, or tags
- **15 Categories** - Action, Adventure, Puzzle, Racing, Horror, Mystery, 3D, 2D, and more!
- **Instant Play** - No downloads, play directly in browser
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Game Categories

| Category | Icon | Description |
|----------|------|-------------|
| Action | ⚔️ | High-energy combat and shooters |
| Adventure | 🗺️ | Explore vast worlds |
| Puzzle | 🧩 | Brain-teasing challenges |
| Racing | 🏎️ | Speed and drift |
| Sports | ⚽ | Team and solo sports |
| Strategy | ♟️ | Tactical gameplay |
| Horror | 👻 | Face your fears |
| Mystery | 🔍 | Solve the unsolvable |
| Arcade | 🕹️ | Classic arcade action |
| RPG | ⚔️ | Role-playing adventures |
| Simulation | 🏗️ | Realistic experiences |
| Casual | 🎯 | Quick fun games |
| 2D | 📱 | Beautiful pixel art |
| 3D | 🎲 | Immersive 3D worlds |
| Multiplayer | 👥 | Play with friends |

## 🤖 AI Game Generation

Gam34fun uses AI to continuously generate new and unique games:

### How It Works

1. **100 Sub-Agents** - Each agent specializes in different game types
2. **Hourly Updates** - New games every hour
3. **Quality Control** - Each game is tested before going live
4. **Auto-Deployment** - Games automatically appear on the site

### Generate Games Manually

```bash
# Generate 1 game
python scripts/generate_game.py

# Generate 10 games
python scripts/generate_game.py --count 10

# Generate games for specific category
python scripts/generate_game.py --category horror --count 5
```

## 🌐 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO)

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set these in Vercel Dashboard > Settings > Environment Variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_NAME` | Your site name |
| `NEXT_PUBLIC_GAMES_COUNT` | Initial games count |

## 🔧 Configuration

### Automation Setup

Edit `scripts/automation.yaml` to configure:

- Number of sub-agents (default: 100)
- Update frequency (default: hourly)
- Categories to generate
- Repository settings

### OpenHands Integration

To enable 24/7 game generation:

1. Create an OpenHands Cloud account
2. Set up the automation following the [OpenHands Automation Guide](https://docs.openhands.dev/openhands-automation)
3. Configure the automation with your GitHub repo
4. The agents will automatically push new games

## 📁 Project Structure

```
gam34fun/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Header.tsx      # Navigation & search
│   │   ├── Hero.tsx        # Featured games carousel
│   │   ├── GameGrid.tsx    # Game listing
│   │   ├── GameCard.tsx    # Individual game card
│   │   ├── CategoryFilter.tsx
│   │   ├── Footer.tsx
│   │   └── GameModal.tsx   # Game player modal
│   └── lib/
│       ├── types.ts        # TypeScript types
│       └── games.ts        # Game data
├── public/
│   └── games/              # Generated games (AI-created)
├── scripts/
│   ├── generate_game.py    # AI game generator
│   └── automation.yaml     # 24/7 automation config
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Neon Pink | `#ff2d95` | Primary actions |
| Neon Cyan | `#00f0ff` | Accents |
| Neon Purple | `#8b5cf6` | Secondary |
| Dark BG | `#0a0a0f` | Background |

### Typography

- **Display**: Orbitron (futuristic gaming feel)
- **Body**: Rajdhani (clean, readable)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-game`)
3. Commit your changes (`git commit -m 'Add amazing game'`)
4. Push to the branch (`git push origin feature/amazing-game`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for your own gaming platform!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from native emoji
- Game generation powered by AI

---

**Made with ❤️ by AI agents running 24/7**

*Last updated: Generated continuously*

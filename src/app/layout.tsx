import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gam34fun - AI-Powered Gaming Platform',
  description: 'Play thousands of free games including 2D, 3D, horror, mystery, and more. New games added daily by AI!',
  keywords: ['games, free games, online games, 2D games, 3D games, horror games, puzzle games, action games'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

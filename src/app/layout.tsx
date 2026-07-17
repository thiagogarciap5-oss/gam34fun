import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GameHub - Free Online Games',
  description: 'Play thousands of free games online. Action, adventure, puzzle, racing and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

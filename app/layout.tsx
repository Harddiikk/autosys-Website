import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Autosys AI - Automating Conversations. Scaling Growth.',
  description: 'Autosys AI is building an autonomous AI workforce that transforms how businesses grow and operate. Voice AI, Agentic Workflows, and AI Chatbots.',
  keywords: ['AI Voice Agents', 'Agentic AI', 'AI Chatbots', 'Sales Automation', 'Marketing AI', 'Autosys'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}

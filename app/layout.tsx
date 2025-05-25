import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mjcal development',
  description: 'Micheal J Callaghan Portfolio',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
    apple: {
      url: '/favicon.ico',
      href: '/favicon.ico',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
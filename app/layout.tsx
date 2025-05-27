import './globals.css';
import AnalyticsWrapper from '@/components/AnalyticsWrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

<Toaster />


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mjcal development',
  description: 'Micheal J Callaghan SWE & PMP Portfolio',
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
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
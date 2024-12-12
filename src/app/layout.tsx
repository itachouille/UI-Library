import { cn } from '@/lib/utils';
import './globals.css';

import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'UI Library',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <body className="flex min-h-[calc(100vh-1px)] flex-col bg-[#121212] font-sans text-[#FFFFFF] antialiased">
        <main className="relative flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}

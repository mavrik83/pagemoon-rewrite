import React from 'react';
import type { Metadata } from 'next';
import { Fira_Sans_Condensed } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const firaSansCondensed = Fira_Sans_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--fira-sans',
});
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang='en'>
        <body
            className={cn(
                'bg-background min-h-screen font-sans antialiased',
                firaSansCondensed.variable,
            )}
        >
            {children}
        </body>
    </html>
);
export default RootLayout;

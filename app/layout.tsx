import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.css';
import { Header } from '@/shared/components/shared';

const inter = Inter({
    subsets: ['cyrillic'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={` ${inter.className}`}>
                <ThemeProvider attribute='class' defaultTheme='light'>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

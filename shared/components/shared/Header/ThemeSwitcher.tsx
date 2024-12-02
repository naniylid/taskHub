'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/components/shared';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant='default'
            className='dark:bg-gray-800 '
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label='Toggle dark mode'
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </Button>
    );
}

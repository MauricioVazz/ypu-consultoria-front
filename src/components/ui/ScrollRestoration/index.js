'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';

        return () => {
            window.history.scrollRestoration = 'auto';
        };
    }, []);

    return null;
}
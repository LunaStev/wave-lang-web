// src/theme/Navbar/icons.tsx
import React from 'react';

export const GithubIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="url(#githubGradient)" // ✅ ID 변경
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* ✅ ID를 고유하게 변경 */}
            <linearGradient id="githubGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
        </defs>
        <path
            d="M12 0.3C5.37 0.3 0 5.67 0 12.3C0 17.4 3.44 21.7 8.2 23.4C8.8 23.5 9 23.1 9 22.8V20.6C5.66 21.3 4.96 19 4.96 19C4.44 17.6 3.66 17.2 3.66 17.2C2.55 16.4 3.74 16.4 3.74 16.4C4.96 16.5 5.6 17.7 5.6 17.7C6.66 19.5 8.4 19 9.1 18.7C9.2 17.9 9.5 17.3 9.8 17C7.14 16.7 4.34 15.7 4.34 11.4C4.34 10.2 4.8 9.2 5.6 8.4C5.46 8.1 5.04 6.9 5.74 5.3C5.74 5.3 6.7 5 9 6.6C9.9 6.3 10.9 6.1 12 6.1C13.1 6.1 14.1 6.3 15 6.6C17.3 5 18.3 5.3 18.3 5.3C19 6.9 18.6 8.1 18.4 8.4C19.2 9.2 19.7 10.2 19.7 11.4C19.7 15.7 16.9 16.7 14.2 17C14.6 17.4 14.9 18.2 14.9 19.4V22.8C14.9 23.1 15.1 23.5 15.8 23.4C20.6 21.7 24 17.4 24 12.3C24 5.67 18.63 0.3 12 0.3Z"
        />
    </svg>
);

export const SunIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="url(#sunGradient)" // ✅ ID 변경
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <defs>
            {/* ✅ ID를 고유하게 변경 */}
            <linearGradient id="sunGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

export const MoonIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="url(#moonGradient)" // ✅ ID 변경
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <defs>
            {/* ✅ ID를 고유하게 변경 */}
            <linearGradient id="moonGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
        </defs>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
);
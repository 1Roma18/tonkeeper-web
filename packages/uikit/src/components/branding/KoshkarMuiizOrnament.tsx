import { FC } from 'react';
import styled from 'styled-components';

const GOLD = '#E5A93B';

const Svg = styled.svg`
    display: block;
    width: 100%;
    max-width: 280px;
    height: auto;
    margin: 0 auto 1rem;
`;

export const KoshkarMuiizOrnament: FC<{ variant?: 'header' | 'splash' }> = ({ variant = 'splash' }) => {
    const height = variant === 'splash' ? 72 : 48;
    const viewBox = variant === 'splash' ? '0 0 280 72' : '0 0 280 48';

    return (
        <Svg
            width={280}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <g stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M140 8 L148 20 L140 32 L132 20 Z" opacity="0.95" />
                <circle cx="140" cy="20" r="2.5" fill={GOLD} stroke="none" opacity="0.7" />
                <path d="M140 14 C118 14 98 22 82 36 C72 46 58 42 52 32" opacity="0.9" />
                <path d="M140 18 C122 18 106 26 94 38 C86 46 74 44 68 36" opacity="0.55" />
                <path d="M132 22 C120 24 108 30 100 40" opacity="0.75" />
                <path d="M140 14 C162 14 182 22 198 36 C208 46 222 42 228 32" opacity="0.9" />
                <path d="M140 18 C158 18 174 26 186 38 C194 46 206 44 212 36" opacity="0.55" />
                <path d="M148 22 C160 24 172 30 180 40" opacity="0.75" />
                {variant === 'splash' && (
                    <>
                        <path d="M140 34 C125 38 108 48 96 58 C88 64 76 62 70 54" opacity="0.5" />
                        <path d="M140 34 C155 38 172 48 184 58 C192 64 204 62 210 54" opacity="0.5" />
                        <path d="M128 42 L140 52 L152 42" opacity="0.65" />
                    </>
                )}
                <path d="M48 44 H232" opacity="0.35" strokeWidth="0.8" />
            </g>
        </Svg>
    );
};

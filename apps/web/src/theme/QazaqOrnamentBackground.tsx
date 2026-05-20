import { FC } from 'react';
import styled from 'styled-components';
const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: ${({ theme }) => theme.backgroundPage};
`;

const SideGlow = styled.div<{ $side: 'left' | 'right' }>`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 28%;
    max-width: 220px;
    ${p => (p.$side === 'left' ? 'left: 0;' : 'right: 0;')}
    background: ${p =>
        p.$side === 'left'
            ? 'linear-gradient(90deg, rgba(0, 178, 178, 0.08) 0%, transparent 100%)'
            : 'linear-gradient(270deg, rgba(0, 178, 178, 0.08) 0%, transparent 100%)'};
`;

export const QazaqOrnamentBackground: FC = () => (
    <Backdrop aria-hidden>
        <SideGlow $side="left" />
        <SideGlow $side="right" />
    </Backdrop>
);

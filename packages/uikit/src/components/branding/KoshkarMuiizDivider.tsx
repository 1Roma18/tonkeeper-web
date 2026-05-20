import { FC } from 'react';
import styled from 'styled-components';
import { KoshkarMuiizOrnament } from './KoshkarMuiizOrnament';

const Wrap = styled.div`
    pointer-events: none;
    opacity: 0.38;
    margin: 0.25rem 0 0.75rem;
    padding: 0 1rem;
`;

/** Subtle national ornament strip for dashboard and settings screens */
export const KoshkarMuiizDivider: FC = () => (
    <Wrap aria-hidden>
        <KoshkarMuiizOrnament variant="header" />
    </Wrap>
);

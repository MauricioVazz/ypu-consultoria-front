'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

const Wrapper = styled.div`
    width: 56px;
    height: 56px;

    border-radius: 50%;

    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    font-weight: 700;

    margin: 0 auto ${theme.spacing.sm};
`;

export default function IconCircle({ children }) {
    return <Wrapper>{children}</Wrapper>;
}
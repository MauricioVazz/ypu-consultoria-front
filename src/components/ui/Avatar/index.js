'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

const Wrapper = styled.div`
    width: 48px;
    height: 48px;

    border-radius: 50%;
    overflow: hidden;

    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    color: ${theme.colors.text};
    font-size: 14px;
    margin: 0 auto ${theme.spacing.sm};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function Avatar({ src, name }) {

    if (!src) {
        return <Wrapper>{name?.charAt(0) || "?"}</Wrapper>;
    }

    return (
        <Wrapper>
            <Image src={src} alt={name} />
        </Wrapper>
    );
}
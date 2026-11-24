'use client'

import styled from 'styled-components'

export const ProfessionalsRowContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;

    width: 100%;
    min-width: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const TextColumn = styled.div`
    min-width: 0;
    order: ${({ $mediaPosition }) =>
        $mediaPosition === 'left' ? 2 : 1};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        order: 1;
    }
`

export const MediaColumn = styled.div`
    min-width: 0;
    order: ${({ $mediaPosition }) =>
        $mediaPosition === 'left' ? 1 : 2};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        order: 2;
    }
`
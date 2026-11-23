'use client'

import styled from 'styled-components'

export const ServicesGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    align-items: stretch;
    justify-items: center;

    column-gap: 10px;
    row-gap: 10px;

    width: 100%;
    min-width: 0;
    padding: 10px;

    /* Última linha com apenas 1 card */
    &:has(> :last-child:nth-child(3n + 1)) {
        > :last-child {
            grid-column: 2;
        }
    }

    /* Última linha com 2 cards */
    &:has(> :last-child:nth-child(3n + 2)) {
        > :nth-last-child(2) {
            grid-column: 1;
        }

        > :last-child {
            grid-column: 2;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        &:has(> :last-child:nth-child(2n + 1)) {
            > :last-child {
                grid-column: 1 / -1;
                width: calc((100% - 10px) / 2);
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;

        > * {
            grid-column: 1 !important;
            width: 100% !important;
        }
    }
`

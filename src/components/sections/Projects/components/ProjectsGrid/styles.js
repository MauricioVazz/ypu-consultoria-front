'use client'

import styled from 'styled-components'

export const ProjectsGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    align-items: stretch;

    width: 100%;
    min-width: 0;

    padding: 10px;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const MediaFrameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-width: 0;
    padding: 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 20px 85px;
    }
`

export const MediaImageWrapper = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 4 / 3;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.md};
`

export const MediaImage = styled(Image)`
    object-fit: cover;
`
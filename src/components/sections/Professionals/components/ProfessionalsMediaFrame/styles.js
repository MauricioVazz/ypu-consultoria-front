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

    width: 85%;
    max-width: 340px;
    aspect-ratio: 3 / 4;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.md};

    &:hover img {
        transform: scale(1.06);
    }
`

export const MediaImage = styled(Image)`
    object-fit: cover;
    object-position: center;

    height: 110% !important;
    transition: transform ${({ theme }) => theme.transition.slow};
`
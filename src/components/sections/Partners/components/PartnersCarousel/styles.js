'use client'

import styled from 'styled-components'

export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    min-width: 0;
`

export const CarouselViewport = styled.div`
    width: 100%;
    min-width: 0;
    overflow: hidden;
`

export const CarouselTrack = styled.div`
    display: flex;
    width: ${({ $count, $visibleCount }) =>
        `${($count / $visibleCount) * 100}%`};

    transform: ${({ $currentIndex, $count }) =>
        `translateX(-${($currentIndex / $count) * 100}%)`};

    transition: ${({ $transitionEnabled, theme }) =>
        $transitionEnabled ? `transform ${theme.transition.slow} ease` : 'none'};
`

export const PartnerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 ${({ $count }) => `${100 / $count}%`};
    min-width: 0;
    padding: 16px;
`

export const PartnerLogo = styled.div`
    position: relative;

    width: 100%;
    height: 110px;

    img {
        object-fit: contain;
        object-position: center;
    }
`

export const CarouselButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 40px;
    height: 40px;

    color: ${({ theme }) => theme.colors.green};
    background: ${({ theme }) => theme.colors.white};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;

    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.green};
        border-color: ${({ theme }) => theme.colors.green};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 34px;
        height: 34px;
        font-size: 12px;
    }
`
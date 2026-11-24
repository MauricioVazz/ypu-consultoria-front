'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const FeaturedProjectContainer = styled.article`
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);

    width: 100%;
    min-width: 0;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

    transition:
        transform ${({ theme }) => theme.transition.normal},
        box-shadow ${({ theme }) => theme.transition.normal};

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.10);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const FeaturedImageColumn = styled.div`
    display: flex;
    align-items: center;

    min-width: 0;
    padding: 10px;
`

export const FeaturedImageWrapper = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 4 / 3;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.canvas};
`

export const FeaturedImage = styled(Image)`
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transition.slow};

    ${FeaturedProjectContainer}:hover & {
        transform: scale(1.03);
    }
`

export const FeaturedPlaceholder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    gap: ${({ theme }) => theme.spacing.xs};

    color: ${({ theme }) => theme.colors.gray};

    svg {
        font-size: 32px;
        opacity: 0.65;
    }

    span {
        font-size: ${({ theme }) => theme.typography.fontSize.small};
    }
`

export const FeaturedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    min-width: 0;
    padding: 20px;
    gap: 20px;

    overflow-wrap: break-word;
`

export const FeaturedCategory = styled.span`
    color: ${({ theme }) => theme.colors.green};

    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    text-transform: uppercase;
    letter-spacing: 0.07em;
`

export const FeaturedTitle = styled.h5`
    width: 100%;
    min-width: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.darkGreen};

    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    overflow-wrap: break-word;
`

export const FeaturedDivider = styled.div`
    width: 80px;
    height: 2.5px;
    flex-shrink: 0;

    background: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radius.sm};
`

export const FeaturedSummary = styled.p`
    width: 100%;
    min-width: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    overflow-wrap: break-word;
`

export const FeaturedLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    margin-top: auto;
    padding: 9px 13px;

    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.green};

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-decoration: none;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
    }

    svg {
        transition: transform ${({ theme }) => theme.transition.fast};
    }

    &:hover svg {
        transform: translate(2px, -2px);
    }
`

'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const ProjectCardContainer = styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    min-width: 0;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

    transition:
        transform ${({ theme }) => theme.transition.fast},
        box-shadow ${({ theme }) => theme.transition.fast},
        border-color ${({ theme }) => theme.transition.fast};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(29, 71, 58, 0.10);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`

export const ProjectCover = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 5 / 4;

    overflow: hidden;
    background: ${({ theme }) => theme.colors.canvas};

    img {
        object-fit: cover;
        transition: transform ${({ theme }) => theme.transition.slow};
    }

    ${ProjectCardContainer}:hover & img {
        transform: scale(1.04);
    }
`

export const CoverPlaceholder = styled.div`
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

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    min-width: 0;
    min-height: 230px;

    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.xs};
`

export const ProjectCategory = styled.span`
    color: ${({ theme }) => theme.colors.green};

    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    text-transform: uppercase;
    letter-spacing: 0.07em;
`

export const ProjectTitle = styled.h5`
    min-width: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.darkGreen};

    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
    overflow-wrap: break-word;
`

export const ProjectDivider = styled.div`
    width: 40px;
    height: 3px;
    flex-shrink: 0;

    margin: 4px 0;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
`

export const ProjectSummary = styled.p`
    min-width: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
    overflow-wrap: break-word;
`

export const ViewProjectLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;

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

    svg {
        transition: transform ${({ theme }) => theme.transition.fast};
    }

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};

        svg {
            transform: translate(2px, -2px);
        }
    }
`

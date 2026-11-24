
'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const ProjectsSection = styled.section`
    width: 100%;
`

export const ProjectsTitle = styled.h2`
    margin: 0;
    padding-top: 40px;
    padding-bottom: 20px;

    color: ${({ theme }) => theme.colors.text};

    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    text-align: center;
`

export const ProjectsMessage = styled.p`
    padding: ${({ theme }) => theme.spacing.lg} 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.p};

    text-align: center;
`

export const ViewAllProjectsLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: fit-content;

    margin: 20px auto 10px;
    padding: 12px 24px;

    background: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radius.sm};

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    text-decoration: none;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
        transform: translateY(-2px);
    }

    svg {
        transition: transform ${({ theme }) => theme.transition.fast};
    }

    &:hover svg {
        transform: translateX(3px);
    }
`

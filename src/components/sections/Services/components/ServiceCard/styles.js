'use client'

import styled from 'styled-components'

export const ServiceCardContainer = styled.article`
    width: 100%;
    height: 100%;
    min-width: 0;

    padding: ${({ theme }) => theme.spacing.sm};

    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

    transition:
        transform ${({ theme }) => theme.transition.normal},
        box-shadow ${({ theme }) => theme.transition.normal},
        border-color ${({ theme }) => theme.transition.normal};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        border-color: ${({ theme }) => theme.colors.primary};
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        &:hover {
            transform: none;
        }
    }
`

export const ServiceCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    min-width: 0;
    height: 100%;

    padding: 10px;

    overflow-wrap: break-word;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    flex-shrink: 0;

    margin-bottom: ${({ theme }) => theme.spacing.md};

    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.sm};

    color: ${({ theme }) => theme.colors.white};

    svg {
        width: 24px;
        height: 24px;
    }
`

export const ServiceTitle = styled.h4`
    width: 100%;
    min-width: 0;
    min-height: 2.4em;

    margin: 0 0 ${({ theme }) => theme.spacing.md};

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    overflow-wrap: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.typography.fontSize.p};
    }
`

export const AccentDivider = styled.div`
    width: 80px;
    height: 2.5px;
    flex-shrink: 0;

    margin-bottom: ${({ theme }) => theme.spacing.md};

    background: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radius.sm};
`

export const ServiceDescription = styled.p`
    width: 100%;
    min-width: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    overflow-wrap: break-word;
`

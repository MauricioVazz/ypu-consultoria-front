'use client'

import styled from 'styled-components'

export const EditorialTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    width: 100%;
    min-width: 0;
    padding: 20px;

    overflow-wrap: break-word;
`

export const EyebrowGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

export const AccentDivider = styled.div`
    width: 40px;
    height: 4px;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.sm};
`

export const Eyebrow = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const EditorialTitle = styled.h3`
    margin: 0;

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    min-width: 0;
    overflow-wrap: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.typography.fontSize.h4};
    }
`

export const EditorialParagraphs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    min-width: 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    p {
        margin: 0;
        overflow-wrap: break-word;
    }
`
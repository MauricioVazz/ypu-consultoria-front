'use client'

import styled from 'styled-components'

export const ProfessionalsTextContainer = styled.div`
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

export const ProfessionalsTitle = styled.h3`
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

export const ProfessionalsParagraphs = styled.div`
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

export const ProfessionalDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.small};

    p {
        margin: 0;
    }
`

export const AreasContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;

    h4 {
        margin: 0;
        color: ${({ theme }) => theme.colors.darkGreen};
        font-size: ${({ theme }) => theme.typography.fontSize.p};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    }

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
`

export const AreaTag = styled.span`
    padding: 6px 12px;

    color: ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.background};
    
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`
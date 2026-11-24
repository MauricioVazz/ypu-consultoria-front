'use client'

import styled from 'styled-components'

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    min-width: 0;
    padding: 20px;

    background: rgba(72, 178, 146, 0.2);
    border-radius: ${({ theme }) => theme.radius.md};
`

export const ContactInfoTitle = styled.h4`
    margin: 0 0 20px;

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const ContactInfoDescription = styled.p`
    margin: 0 0 20px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
`

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

export const ContactDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.p};

    svg {
        flex-shrink: 0;
        font-size: 20px;
    }

    span {
        overflow-wrap: anywhere;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.typography.fontSize.small};
    }
`
'use client'

import styled from 'styled-components'

export const ContactActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-width: 0;
    padding: 20px;

    background: rgba(72, 178, 146, 0.2);
    border-radius: ${({ theme }) => theme.radius.md};

    text-align: center;
`

export const ContactActionTitle = styled.h4`
    margin: 0 0 20px;

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const ContactActionDescription = styled.p`
    margin: 0 0 20px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
`

export const ContactLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 230px;
    height: 129px;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const WhatsAppButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: fit-content;
    max-width: 100%;
    padding: 12px 24px;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green};

    border-radius: ${({ theme }) => theme.button.radius};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    text-decoration: none;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
    }

    svg {
        font-size: 20px;
        flex-shrink: 0;
    }
`
'use client'

import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};

    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily};
`

export const FooterContent = styled.div`
    width: ${({ theme }) => theme.container.gutter};
    max-width: ${({ theme }) => theme.container.xl};
    margin: 0 auto;
`

export const FooterColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing.md};
    }
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
`

export const FooterTitle = styled.h4`
    margin: 0 0 ${({ theme }) => theme.spacing.sm};

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

export const FooterLinks = styled.nav`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const FooterContactList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const FooterContactItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};

    svg {
        flex-shrink: 0;
        margin-top: 4px;
        font-size: 16px;
    }

    span {
        line-height: ${({ theme }) => theme.typography.lineHeight.body};
        overflow-wrap: anywhere;
    }
`

export const FooterSocialSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing.md};
`

export const FooterSocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const FooterSocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-decoration: none;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        opacity: 0.85;
    }
`

export const SocialIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    flex-shrink: 0;

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ $type }) =>
        $type === 'whatsapp'
            ? '#25D366'
            : 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)'};

    color: #FFFFFF;

    svg {
        font-size: 18px;
    }
`

export const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: ${({ theme }) => theme.spacing.md} 0;

    background: ${({ theme }) => theme.colors.white};
`

export const FooterCopyright = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
`
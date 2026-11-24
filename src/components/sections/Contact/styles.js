'use client'

import styled from 'styled-components'

export const ContactSection = styled.section`
    width: 100%;
    padding: 20px 10px 40px;
`

export const ContactTitle = styled.h2`
    margin: 0;
    padding-bottom: 20px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    text-align: center;
`

export const ContactColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`
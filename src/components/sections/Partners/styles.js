'use client'

import styled from 'styled-components'

export const PartnersSection = styled.section`
    width: 100%;
    padding: 40px 0;
`

export const PartnersTitle = styled.h2`
    margin: 0;
    padding-bottom: 20px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    text-align: center;
`
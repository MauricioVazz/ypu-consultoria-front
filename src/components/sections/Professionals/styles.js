'use client'

import styled from 'styled-components'

export const ProfessionalsTextSection = styled.section`
    width: 100%;
`

export const ProfessionalsTextTitle = styled.h2`
    margin: 0;
    padding-top: 40px;
    padding-bottom: 20px;

    color: ${({ theme }) => theme.colors.text};

    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    text-align: center;
`
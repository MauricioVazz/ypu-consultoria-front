'use client'

import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;

    width: 100%;
    height: 533px;

    margin-top: 80px;

background-image:
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.12) 55%,
            rgba(0, 0, 0, 0) 100%
        ),
        url("/images/hero.jpg");

    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 533px;
        margin-top: 70px;
    }
`;

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    width: 100%;
    min-height: 533px;

    align-items: center;

    /* Primeira coluna */
    & > *:first-child {
        grid-column: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        min-height: 533px;
    }
`;

export const HeroLeftColumn = styled.div`
    grid-column: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    padding: 20px;
`;

export const HeroTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    padding: 20px;
`;

export const HeroEyebrow = styled.h5`
    margin: 0;

    color: rgba(255, 255, 255, 0.88);

    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.3;
`;

export const HeroTitle = styled.h1`
    margin: 0;

    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.typography.fontSize.h3};
    }
`;

export const HeroDescription = styled.h4`
    margin: 0;

    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    max-width: 580px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.typography.fontSize.p};
    }
`;

export const HeroButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    min-height: 48px;
    margin-left: 20px;
    padding: 0 22px;

    border-radius: 9px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    text-decoration: none;
    transition: ${({ theme }) => theme.transition.normal};

    &:hover {
        background: ${({ theme }) => theme.colors.green};
        transform: translateY(-2px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-left: 20px;
        min-height: 44px;
        padding: 0 18px;
    }
`;
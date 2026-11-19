"use client";

import styled from "styled-components";

export const LoginContainer = styled.main`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const ImagePanel = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.lg};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};

    background-image: url("/images/admin-login.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-height: 300px;
        padding: ${({ theme }) => theme.spacing.md};
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(
        180deg,
        rgba(20, 48, 39, 0.35) 0%,
        rgba(20, 48, 39, 0.25) 35%,
        rgba(20, 48, 39, 0.88) 100%
    );
`;

export const Brand = styled.div`
    position: relative;
    z-index: 1;
`;

export const BrandLogo = styled.div`
    img {
        width: 150px;
        height: auto;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
`;

export const BrandMessage = styled.div`
    position: relative;
    z-index: 1;
    max-width: 540px;

    span {
        display: block;
        margin-bottom: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.typography.fontSize.small};
        font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        letter-spacing: 2px;
    }

    h1 {
        margin: 0;
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: clamp(36px, 4vw, 58px);
        line-height: ${({ theme }) => theme.typography.lineHeight.heading};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        letter-spacing: -1.8px;
    }

    p {
        max-width: 420px;
        margin-top: ${({ theme }) => theme.spacing.md};
        color: rgba(255, 255, 255, 0.82);
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize.small};
        line-height: ${({ theme }) => theme.typography.lineHeight.body};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        h1 {
            font-size: 34px;
        }
    }
`;

export const FormPanel = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.lg} 48px;
    box-sizing: border-box;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.lg} 28px;
    }
`;

export const FormContent = styled.div`
    width: 100%;
    max-width: 420px;
`;

export const FormEyebrow = styled.span`
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    letter-spacing: 1.8px;
`;

export const FormTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGreen};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: clamp(30px, 3vw, 38px);
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    letter-spacing: -1.2px;
`;

export const FormDescription = styled.p`
    margin: ${({ theme }) => theme.spacing.sm} 0 36px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 15px;
    box-sizing: border-box;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    outline: none;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};

    transition: border-color ${({ theme }) => theme.transition.fast},
                box-shadow ${({ theme }) => theme.transition.fast};

    &::placeholder {
        color: #A1AAA5;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.green};
        box-shadow: 0 0 0 3px rgba(34, 127, 102, 0.1);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.p`
    margin: -6px 0 0;
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 52px;
    margin-top: 6px;

    border: none;
    border-radius: ${({ theme }) => theme.button.radius};

    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    cursor: pointer;
    transition: background ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.fast};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.darkGreen};
    }

    &:active:not(:disabled) {
        transform: scale(0.99);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const FooterText = styled.p`
    margin-top: 48px;
    color: ${({ theme }) => theme.colors.gray};
    opacity: 0.65;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    text-align: center;
`;

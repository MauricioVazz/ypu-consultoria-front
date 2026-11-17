
"use client";

import styled from "styled-components";

export const DeviceSelect = styled.select`
    min-width: 150px;
    padding: 9px 32px 9px 12px;

    appearance: none;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.button.radius};

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

    cursor: pointer;
    outline: none;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.green};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
    }

    option {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.text};
    }
`;

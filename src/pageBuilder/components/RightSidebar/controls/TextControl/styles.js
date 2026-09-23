"use client";

import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;

    padding: 8px 10px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;
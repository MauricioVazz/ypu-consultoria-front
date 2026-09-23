"use client";

import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-bottom: 16px;
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 8px;
`;

export const ModeSelect = styled.select`
    width: auto;

    padding: 6px 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;
`;

export const FieldLabel = styled.label`
    font-size: 13px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text};
`;

export const Select = styled.select`
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
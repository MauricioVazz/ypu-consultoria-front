"use client";

import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    margin-bottom: 16px;
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 8px;
`;

export const Select = styled.select`
    width: 100%;
    box-sizing: border-box;

    padding: 8px 10px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 13px;

    outline: none;

    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;
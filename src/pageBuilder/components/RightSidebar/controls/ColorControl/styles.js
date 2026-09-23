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
`;

export const ColorButton = styled.button`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 8px;

    padding: 8px 10px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: 13px;

    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) =>
            theme.colors.primary};
    }
`;

export const ColorPreview = styled.span`
    width: 16px;
    height: 16px;

    flex-shrink: 0;

    display: block;

    background: ${({ $color }) => $color};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius: 4px;
`;

export const ColorLabel = styled.span`
    flex: 1;

    text-align: left;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4px;

    padding: 4px;

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
`;

export const OptionButton = styled.button`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 8px;

    padding: 7px 8px;

    border: none;
    border-radius: 6px;

    background: ${({ $active, theme }) =>
        $active
            ? theme.colors.background
            : "transparent"};

    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: 13px;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};
    }
`;

"use client";

import styled from "styled-components";

export const ToolbarContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 64px;
    padding: 0 24px;

    box-sizing: border-box;

    background: ${({ theme }) => theme.colors.toolbar};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ToolbarActions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ToolbarButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ToolbarButton = styled.button`
    padding: 9px 16px;

    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.button.radius};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

    cursor: pointer;
    transition: ${({ theme }) => theme.button.transition};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const SaveButton = styled(ToolbarButton)`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.green};
    }
`;

export const PreviewButton = styled(ToolbarButton)`
    background: transparent;
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const PublishButton = styled(ToolbarButton)`
    background: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.green};
    }
`;

export const DeleteButton = styled(ToolbarButton)`
    background: transparent;
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.white};
    }
`;

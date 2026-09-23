"use client";

import styled from "styled-components";

export const ToolbarContainer = styled.header`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    padding: 0 24px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.background};

    .left,
    .center,
    .right {
        display: flex;
        align-items: center;
    }

    .left {
        gap: 16px;
    }

    .center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        flex-direction: column;
        gap: 4px;
    }

    .right {
        gap: 12px;
    }
`;

export const ToolbarActions = styled.div`
    display: flex;

    align-items: center;

    gap: 16px;
`;
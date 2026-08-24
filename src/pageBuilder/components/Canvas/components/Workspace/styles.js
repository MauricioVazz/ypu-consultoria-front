"use client";

import styled from "styled-components";

export const WorkspaceContainer = styled.div`
    flex: 1;

    min-width: 0;
    min-height: 0;

    display: flex;

    justify-content: center;
    align-items: flex-start;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 48px 72px;

    background: ${({ theme }) =>
        theme.colors.surface};

    box-sizing: border-box;
`;

export const PageViewport = styled.div`
    width: ${({ $width, $scale }) =>
        `${$width * $scale}px`};

    min-height: 100%;

    display: flex;

    justify-content: center;
    align-items: flex-start;

    flex-shrink: 0;
`;

export const PageFrame = styled.div`
    transform: scale(
        ${({ $scale }) => $scale}
    );

    transform-origin: top center;

    width: max-content;

    flex-shrink: 0;
`;
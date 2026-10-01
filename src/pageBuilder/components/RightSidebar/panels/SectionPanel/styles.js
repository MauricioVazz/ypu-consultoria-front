import styled from "styled-components";

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) =>
        theme.spacing.md
    };
`;

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: ${({ theme }) =>
        theme.spacing.sm
    };

    border-bottom: 1px solid ${({ theme }) =>
        theme.colors.border
    };
`;

export const PanelTitle = styled.h2`
    margin: 0;

    font-size: 16px;
    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold
    };

    color: ${({ theme }) =>
        theme.colors.text
    };
`;

export const DebugSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) =>
        theme.spacing.xs};
`;

export const DebugTitle = styled.h4`
    margin: 0;

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const DebugContent = styled.pre`
    margin: 0;

    padding: ${({ theme }) =>
        theme.spacing.sm};

    overflow-x: auto;

    border: 1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.canvas};

    color: ${({ theme }) =>
        theme.colors.gray};

    font-family: monospace;
    font-size: 11px;
    line-height: 1.5;

    white-space: pre-wrap;
    word-break: break-word;
`;
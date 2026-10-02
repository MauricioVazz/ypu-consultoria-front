import styled from "styled-components";

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    width: 100%;
`;

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: ${({ theme }) => theme.spacing.sm};
`;

export const PanelTitle = styled.h3`
    margin: 0;

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h5};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const SectionTitle = styled.h4`
    margin: 0;

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const ErrorMessage = styled.small`
    color: ${({ theme }) =>
        theme.colors.danger};
`;

export const DebugSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) =>
        theme.spacing.xs};
`;

export const DebugTitle = styled.h4`
    margin: 0;

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const DebugContent = styled.pre`
    margin: 0;

    padding: ${({ theme }) =>
        theme.spacing.xs};

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.canvas};

    color: ${({ theme }) =>
        theme.colors.gray};

    font-family: monospace;
    font-size: 11px;

    overflow-x: auto;

    white-space: pre-wrap;
    word-break: break-word;
`;
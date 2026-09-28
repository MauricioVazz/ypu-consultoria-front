import styled from "styled-components";

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`;

export const PanelTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) =>
        theme.colors?.text ?? "#1E1E1E"};
`;

export const SaveButton = styled.button`
    border: none;
    border-radius: 6px;
    padding: 7px 12px;

    font-size: 13px;
    font-weight: 500;

    cursor: ${({ disabled }) =>
        disabled ? "not-allowed" : "pointer"};

    color: ${({ theme }) =>
        theme.colors?.white ?? "#FFFFFF"};

    background: ${({ theme, disabled }) =>
        disabled
            ? theme.colors?.gray ?? "#A0A0A0"
            : theme.colors?.primary ?? "#227F66"};

    opacity: ${({ disabled }) =>
        disabled ? 0.6 : 1};

    transition:
        background 0.2s ease,
        opacity 0.2s ease;

    &:hover:not(:disabled) {
        background: ${({ theme }) =>
            theme.colors?.darkGreen ?? "#1D473A"};
    }
`;

export const ErrorMessage = styled.p`
    margin: -6px 0 0;

    font-size: 12px;
    line-height: 1.4;

    color: ${({ theme }) =>
        theme.colors?.danger ?? "#C44545"};
`;

export const DebugSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 8px;
    padding-top: 16px;

    border-top: 1px solid
        ${({ theme }) =>
            theme.colors?.border ?? "#E5E5E5"};
`;

export const DebugTitle = styled.h4`
    margin: 0;

    font-size: 12px;
    font-weight: 600;

    color: ${({ theme }) =>
        theme.colors?.text ?? "#1E1E1E"};
`;

export const DebugContent = styled.pre`
    margin: 0;
    padding: 10px;

    max-width: 100%;
    overflow-x: auto;

    border-radius: 6px;

    background: ${({ theme }) =>
        theme.colors?.background ?? "#F5F5F2"};

    font-size: 11px;
    line-height: 1.5;
    color: ${({ theme }) =>
        theme.colors?.gray ?? "#2E3634"};

    white-space: pre-wrap;
    word-break: break-word;
`;
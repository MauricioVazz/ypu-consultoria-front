import styled from "styled-components";

export const PanelContainer = styled.div`    display: flex;
    flex-direction: column;
    gap: 16px;`;

export const PanelHeader = styled.div`    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;`;

export const PanelTitle = styled.h3`
margin: 0;

font-size: 16px;
font-weight: 600;

color: ${({ theme }) =>
        theme.colors.text};

`;

export const SaveButton = styled.button`
padding: 6px 12px;

border: 1px solid ${({ theme }) =>
        theme.colors.primary};

border-radius: ${({ theme }) =>
        theme.radius.sm};

background: ${({ theme }) =>
        theme.colors.primary};

color: ${({ theme }) =>
        theme.colors.white};

font-family: inherit;
font-size: 12px;
font-weight: 500;

cursor: pointer;

transition:
    background ${({ theme }) =>
        theme.transition.fast},
    border-color ${({ theme }) =>
        theme.transition.fast};

&:hover:not(:disabled) {
    background: ${({ theme }) =>
        theme.colors.green};

    border-color: ${({ theme }) =>
        theme.colors.green};
}

&:disabled {
    background: ${({ theme }) =>
        theme.colors.surface};

    border-color: ${({ theme }) =>
        theme.colors.border};

    color: ${({ theme }) =>
        theme.colors.gray};

    cursor: not-allowed;
}

`;

export const ErrorMessage = styled.span`    font-size: 12px;
    color: ${({ theme }) =>
        theme.colors.danger};`;

export const DebugSection = styled.div`    display: flex;
    flex-direction: column;
    gap: 8px;`;

export const DebugTitle = styled.h4`
margin: 0;

font-size: 13px;
font-weight: 600;

color: ${({ theme }) =>
        theme.colors.text};

`;

export const DebugContent = styled.pre`
margin: 0;
padding: 8px;


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

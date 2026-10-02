import styled from "styled-components";

export const PanelContainer = styled.aside`
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing.sm};

width: 100%;

`;

export const PanelHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding-bottom: ${({ theme }) =>
    theme.spacing.sm};

border-bottom: 1px solid
    ${({ theme }) => theme.colors.border};

`;

export const PanelTitle = styled.h2`
margin: 0;

font-size: ${({ theme }) =>
    theme.typography.fontSize.h5};

font-weight: ${({ theme }) =>
    theme.typography.fontWeight.semibold};

color: ${({ theme }) =>
    theme.colors.text};

`;

export const DebugSection = styled.div`
margin-top: ${({ theme }) =>
theme.spacing.md};

border-top: 1px solid
    ${({ theme }) => theme.colors.border};

padding-top: ${({ theme }) =>
    theme.spacing.sm};

`;

export const DebugTitle = styled.h3`
margin: 0 0 ${({ theme }) =>
theme.spacing.xs};

font-size: ${({ theme }) =>
    theme.typography.fontSize.small};

font-weight: ${({ theme }) =>
    theme.typography.fontWeight.semibold};

color: ${({ theme }) =>
    theme.colors.gray};

`;

export const DebugContent = styled.pre`
margin: 0;

padding: ${({ theme }) =>
    theme.spacing.sm};

max-height: 300px;

overflow: auto;

border-radius: ${({ theme }) =>
    theme.radius.sm};

background: ${({ theme }) =>
    theme.colors.canvas};

color: ${({ theme }) =>
    theme.colors.gray};

font-family: monospace;
font-size: ${({ theme }) =>
    theme.typography.fontSize.small};

white-space: pre-wrap;
word-break: break-word;


`;

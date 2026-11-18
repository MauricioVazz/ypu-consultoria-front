
import styled from "styled-components";

export const ToolbarLeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: transparent;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`;

export const ProjectLabel = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
`;

export const ProjectTitle = styled.span`
    max-width: 220px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const EditButton = styled.button`
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.green};
    font-size: 12px;
    font-weight: 650;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.background};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

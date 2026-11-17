import styled from "styled-components";

export const ToolbarCenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
`;

export const ProjectTitle = styled.h1`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const ProjectStatus = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.85rem;
    font-weight: 500;
`;
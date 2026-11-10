'use client';

import styled from "styled-components";

export const SidebarContainer = styled.aside`
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 100%;

    background: ${({ theme }) => theme.colors.sidebar};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    `;

export const TabsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    `;

export const TabButton = styled.button`
    flex: 1;
    padding: 14px 8px;

    border: none;
    border-bottom: 2px solid
        ${({ theme, $active }) =>
        $active ? theme.colors.primary : "transparent"};

    background: transparent;

    color: ${({ theme, $active }) =>
        $active ? theme.colors.primary : theme.colors.gray};

    font-size: 13px;
    font-weight: ${({ $active }) => ($active ? 600 : 500)};

    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    `;

export const SidebarContent = styled.div`
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    `;

export const SectionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const SectionsCount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 22px;
    height: 22px;

    padding: 0 6px;

    border-radius: 6px;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};

    font-size: 11px;
    font-weight: 600;
`;

export const SectionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SectionItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 12px;

    border: 1px solid
        ${({ theme, $active }) =>
            $active ? theme.colors.primary : theme.colors.border};

    border-radius: 8px;

    background: ${({ theme, $active }) =>
        $active ? `${theme.colors.primary}10` : theme.colors.white};

    color: ${({ theme }) => theme.colors.text};

    text-align: left;
    cursor: pointer;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SectionName = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

export const SectionArrow = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 20px;
`;

export const EmptyMessage = styled.p`
    margin: 0;
    padding: 16px 8px;

    color: ${({ theme }) => theme.colors.gray};

    font-size: 12px;
    line-height: 1.6;
    text-align: center;
`;

export const SectionViewHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    width: fit-content;
    padding: 4px 0;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.colors.gray};
    font-size: 12px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SectionViewTitle = styled.h3`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    font-weight: 600;
`;

export const StructureList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;


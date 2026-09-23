'use client';

import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 280px;

    height: 100%;
    min-height: 0;

    flex-shrink: 0;

    padding: 24px;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;
    
    border-right: 1px solid ${({ theme }) => theme.colors.border};
`;
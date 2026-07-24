'use client';

import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 280px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 24px;
`;
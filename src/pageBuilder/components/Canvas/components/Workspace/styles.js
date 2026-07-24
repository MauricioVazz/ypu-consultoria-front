'use client';

import styled from "styled-components";

export const WorkspaceContainer = styled.div`
  flex: 1;

  display: flex;

  justify-content: center;

  align-items: flex-start;

  overflow: auto;

  padding: 48px;

  background: ${({ theme }) => theme.colors.surface};
`;
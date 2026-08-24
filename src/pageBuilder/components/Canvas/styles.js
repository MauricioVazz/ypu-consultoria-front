'use client';

import styled from "styled-components";

export const CanvasContainer = styled.main`
  flex: 1;
  
  min-height: 0;
  min-width: 0;

  display: flex;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
`;
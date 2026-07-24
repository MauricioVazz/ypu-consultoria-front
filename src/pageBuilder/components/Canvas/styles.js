'use client';

import styled from "styled-components";

export const CanvasContainer = styled.main`
  flex: 1;

  display: flex;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
`;
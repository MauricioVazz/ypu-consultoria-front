'use client';

import styled from "styled-components";

export const PageContainer = styled.div`
  width: ${({ $width }) => `${$width}px`};

  min-height: 1600px;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0 8px 30px rgba(0,0,0,.08);

  flex-shrink: 0;

  box-sizing: border-box;
`;
'use client';

import styled from "styled-components";

export const PageContainer = styled.div`
  width: 1200px;

  min-height: 1600px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radius.md};

  box-shadow: 0 8px 30px rgba(0,0,0,.08);

  overflow: hidden;
`;
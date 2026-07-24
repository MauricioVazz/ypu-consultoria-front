'use client';

import styled from "styled-components";

export const BuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ToolbarContainer = styled.header`
  height: 64px;
  flex-shrink: 0;
`;

export const ContentContainer = styled.main`
  flex: 1;
  display: flex;
  overflow: hidden;
`;
'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
  }

  body {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input,
  textarea,
  select {
    font-family: inherit;
  }

`
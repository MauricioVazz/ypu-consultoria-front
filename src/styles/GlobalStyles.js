'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    background:#F5F5F2;
    color:#1E1E1E;
    font-family:sans-serif;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  img{
    display:block;
    max-width:100%;
  }

  button{
    border:none;
    background:none;
    cursor:pointer;
  }

`
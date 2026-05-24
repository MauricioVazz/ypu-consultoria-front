'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`

  position: fixed;
  top: 0;

  background:
    ${({ theme }) => theme.colors.background};

  width: 100%;
  padding: 20px 0;

  z-index: 999;

  .header-content{
    display:flex;
    align-items:center;
    gap:20px;
  }

  .logo-container{
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    align-self: stretch;
  }

  .navbar{
    width: 779px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    align-self: stretch;
    }
    
    .nav-list{
      display:flex;
      align-items:flex-start;
      gap:20px;
      align-self: stretch;
      list-style:none;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.white};
  }

  .nav-item a{
    display: flex;
    padding: 8px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.p};
  }

  .button-container{
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1 0 0;
    align-self: stretch;
  }

  .contact-button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.green};
}

  .contact-content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: ${({ theme }) => theme.fontSize.p};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white};
  }

`
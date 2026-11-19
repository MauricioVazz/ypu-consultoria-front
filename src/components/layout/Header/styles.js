
'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    padding: 10px 0;

    background: ${({ theme }) => theme.colors.background};
    z-index: 999;

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        min-height: 60px;
    }

    .logo {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .logo img {
        display: block;
        width: 105px;
        height: auto;
        object-fit: contain;
    }

    .navbar {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding: 5px;
        margin: 0;

        list-style: none;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.white};
    }

    .nav-item a {
        display: block;
        padding: 9px 13px;

        border-radius: 7px;

        color: ${({ theme }) => theme.colors.gray};
        font-size: ${({ theme }) => theme.typography.fontSize.small};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

        text-decoration: none;
        white-space: nowrap;
        transition: ${({ theme }) => theme.transition.normal};
    }

    .nav-item a:hover {
        color: ${({ theme }) => theme.colors.green};
        background: ${({ theme }) => theme.colors.background};
    }

    .button-container {
        flex-shrink: 0;
    }

    .contact-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        min-height: 44px;
        padding: 0 18px;

        border: none;
        border-radius: 9px;

        background: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};

        font-size: ${({ theme }) => theme.typography.fontSize.small};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

        text-decoration: none;
        transition: ${({ theme }) => theme.transition.normal};
    }

    .contact-button:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
        transform: translateY(-1px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        .header-content {
            gap: 12px;
        }

        .nav-list {
            gap: 0;
        }

        .nav-item a {
            padding: 9px 8px;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        .header-content {
            flex-wrap: wrap;
        }

        .navbar {
            order: 3;
            flex-basis: 100%;
            overflow-x: auto;
            justify-content: flex-start;
        }

        .nav-list {
            justify-content: flex-start;
        }

        .button-container {
            margin-left: auto;
        }
    }


.header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}

.menu-toggle {
    display: none;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.green};

    cursor: pointer;
}

/* Tablet */
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .header-content {
        gap: 12px;
    }

    .nav-list {
        gap: 0;
    }

    .nav-item a {
        padding: 9px 8px;
    }
}

/* Mobile */
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 0;

    .header-content {
        min-height: 54px;
        gap: 10px;
    }

    .logo img {
        width: 88px;
        height: auto;
    }

    .navbar {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;
        padding: 10px 4% 18px;

        background: ${({ theme }) => theme.colors.background};
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
    }

    .navbar.active {
        display: block;
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;

        width: 100%;
        padding: 8px;

        background: ${({ theme }) => theme.colors.white};
        border-radius: 10px;
    }

    .nav-item a {
        padding: 13px 14px;
        font-size: ${({ theme }) => theme.typography.fontSize.p};
    }

    .header-actions {
        margin-left: auto;
        gap: 8px;
    }

    .contact-button {
        min-height: 40px;
        padding: 0 12px;
        gap: 6px;
    }

    .contact-button svg {
        width: 19px;
        height: 19px;
    }

    .menu-toggle {
        display: flex;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 380px) {
      .logo img {
          width: 76px;
      }

      .contact-button {
          padding: 0 9px;
      }

      .contact-button span {
          font-size: 0.75rem;
      }
  }

`;

import styled from "styled-components";

export const SaveButtonContainer = styled.button`

    padding: 8px 14px;

    border: none;
    border-radius: ${({ theme }) =>
        theme.button.radius
    };

    background: ${({ theme }) =>
        theme.colors.primary
    };

    color: ${({ theme }) =>
        theme.colors.white
    };

    font-size: 13px;
    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.medium
    };

    cursor: pointer;

    transition:
        background ${({ theme }) =>
            theme.transition.fast
        },
        opacity ${({ theme }) =>
            theme.transition.fast
        };

    &:hover:not(:disabled) {
        background: ${({ theme }) =>
            theme.colors.green
        };
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
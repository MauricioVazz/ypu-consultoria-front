import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const ControlLabel = styled.strong`
    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const ItemsSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.xs};

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};
`;

export const ItemsCount = styled.span`
    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.medium};

    color: ${({ theme }) =>
        theme.colors.gray};
`;

export const ManageButton = styled.button`
    min-height: 36px;
    padding: 0 ${({ theme }) => theme.spacing.xs};

    border: 1px solid ${({ theme }) =>
        theme.colors.primary};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.primary};

    color: ${({ theme }) =>
        theme.colors.white};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    cursor: pointer;

    transition:
        background ${({ theme }) =>
            theme.transition.fast},
        border-color ${({ theme }) =>
            theme.transition.fast};

    &:hover {
        background: ${({ theme }) =>
            theme.colors.green};

        border-color: ${({ theme }) =>
            theme.colors.green};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) =>
            theme.colors.primary};

        outline-offset: 2px;
    }
`;
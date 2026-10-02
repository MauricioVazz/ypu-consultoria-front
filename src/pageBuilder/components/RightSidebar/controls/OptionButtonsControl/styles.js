import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) =>
        theme.spacing.xs};
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

export const OptionsGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: ${({ theme }) =>
        theme.spacing.xs};
`;

export const OptionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${({ theme, $compact }) =>
        $compact
            ? "4px"
            : theme.spacing.xs};

    min-height: ${({ $compact }) =>
        $compact ? "52px" : "72px"};

    padding: ${({ theme, $compact }) =>
        $compact
            ? "6px"
            : theme.spacing.xs};

    border: 1px solid
        ${({ theme, $active }) =>
            $active
                ? theme.colors.primary
                : theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme, $active }) =>
        $active
            ? theme.colors.background
            : theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.text};

    cursor: pointer;

    transition:
        border-color ${({ theme }) =>
            theme.transition.fast},
        background ${({ theme }) =>
            theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) =>
            theme.colors.primary};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    min-height: ${({ $compact }) =>
        $compact ? "20px" : "28px"};
`;

export const OptionLabel = styled.span`
    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.medium};

    color: ${({ theme }) =>
        theme.colors.text};

    text-align: center;
`;
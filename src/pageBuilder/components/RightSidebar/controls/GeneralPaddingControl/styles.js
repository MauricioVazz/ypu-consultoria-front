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

export const Select = styled.select`
    width: 100%;

    min-height: 40px;

    padding: 0
        ${({ theme }) =>
            theme.spacing.xs};

    border: 1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    cursor: pointer;

    &:focus {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 1px;
    }
`;
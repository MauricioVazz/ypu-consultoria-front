import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;
    color: ${({ theme }) =>
        theme.colors.text};
`;

export const Select = styled.select`
    width: 100%;

    padding: 8px 10px;

    border: 1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: 13px;

    outline: none;

    &:focus {
        border-color: ${({ theme }) =>
            theme.colors.primary};
    }
`;
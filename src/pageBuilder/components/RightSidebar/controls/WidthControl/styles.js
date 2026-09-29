import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
`;

export const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;

export const OptionButton = styled.button`
    padding: 10px 12px;

    border: 1px solid
        ${({ $active, theme }) =>
            $active
                ? theme.colors.primary
                : theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ $active, theme }) =>
        $active
            ? theme.colors.primary
            : theme.colors.white};

    color: ${({ $active, theme }) =>
        $active
            ? theme.colors.white
            : theme.colors.text};

    font-size: 13px;
    cursor: pointer;

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) =>
            theme.colors.primary};
    }
`;
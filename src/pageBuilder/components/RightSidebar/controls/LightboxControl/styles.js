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

    strong {
        font-size: 0.875rem;
        font-weight: ${({ theme }) =>
            theme.typography.fontWeight.medium};

        color: ${({ theme }) =>
            theme.colors.text};
    }
`;

export const SwitchContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    pointer-events: none;
`;

export const Switch = styled.span`
    position: relative;

    width: 42px;
    height: 24px;

    border-radius: 999px;

    background: ${({ theme, $checked }) =>
        $checked
            ? theme.colors.primary
            : theme.colors.border};

    transition: background
        ${({ theme }) => theme.transition.fast};

    span {
        position: absolute;
        top: 3px;
        left: ${({ $checked }) =>
            $checked ? "21px" : "3px"};

        width: 18px;
        height: 18px;

        border-radius: 50%;

        background: ${({ theme }) =>
            theme.colors.white};

        transition: left
            ${({ theme }) => theme.transition.fast};
    }
`;

export const SwitchLabel = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) =>
        theme.colors.gray};
`;
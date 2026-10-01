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

export const ValueContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const Value = styled.span`
    font-size: 13px;

    color: ${({ theme }) =>
        theme.colors.gray};
`;

export const ResetButton = styled.button`
    padding: 2px 6px;

    border: 0;
    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.primary};

    font-size: 11px;

    cursor: pointer;

    &:hover {
        color: ${({ theme }) =>
            theme.colors.green};
    }
`;

export const Slider = styled.input`
    width: 100%;

    accent-color: ${({ theme }) =>
        theme.colors.primary};

    cursor: pointer;
`;
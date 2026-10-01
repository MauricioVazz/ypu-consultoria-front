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

export const SwitchContainer = styled.label`
    display: flex;
    align-items: center;

    gap: 8px;

    cursor: pointer;
`;

export const Switch = styled.input`
    width: 16px;
    height: 16px;

    accent-color: ${({ theme }) =>
        theme.colors.primary};

    cursor: pointer;
`;

export const SwitchLabel = styled.span`
    font-size: 13px;

    color: ${({ theme }) =>
        theme.colors.gray};
`;
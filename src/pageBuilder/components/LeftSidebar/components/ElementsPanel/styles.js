import styled from "styled-components";

export const ElementsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
`;

export const ElementsGroupTitle = styled.h4`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ElementsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;

export const ElementButton = styled.button`
    min-height: 42px;
    padding: 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme, disabled }) =>
        disabled ? theme.colors.gray : theme.colors.text};

    font-size: 12px;
    cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
    opacity: ${({ disabled }) => disabled ? 0.45 : 1};

    transition: ${({ theme }) => theme.transition.fast};

    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;
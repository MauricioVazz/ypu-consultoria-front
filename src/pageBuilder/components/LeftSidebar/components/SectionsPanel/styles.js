
import styled from "styled-components";

export const SectionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 16px;
`;

export const SectionsHeaderTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SectionsCount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 22px;
    height: 22px;
    padding: 0 6px;

    border-radius: 6px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};

    font-size: 11px;
    font-weight: 600;
`;

export const SectionName = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

export const SectionOrderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const SectionOrderButton = styled.button`
    padding: 7px 9px;
    border: none;
    border-radius: 6px;

    background: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.background : theme.colors.primary};

    color: ${({ theme, $disabled }) =>
        $disabled ? theme.colors.gray : theme.colors.white};

    font-size: 11px;
    font-weight: 600;

    cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};
    opacity: ${({ $disabled }) => $disabled ? 0.6 : 1};

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        ${({ $disabled, theme }) =>
            !$disabled && `background: ${theme.colors.green};`}
    }
`;

export const CancelOrderButton = styled.button`
    padding: 7px 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    background: transparent;
    color: ${({ theme }) => theme.colors.gray};

    font-size: 11px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const SectionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SectionOrderError = styled.p`
    margin: 0 0 12px;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 12px;
`;
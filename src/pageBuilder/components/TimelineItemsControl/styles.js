
import styled from "styled-components";

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ControlHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ControlLabel = styled.span`
    font-size: 13px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};
`;

export const ItemsSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`;

export const ItemsCount = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
`;

export const ManageButton = styled.button`
    padding: 8px 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-size: 12px;
    font-weight: 500;

    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;


import styled from "styled-components";

export const StructureNodeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StructureItemButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    padding: 9px 8px;

    border: 1px solid
        ${({ theme, $active }) =>
            $active ? theme.colors.primary : "transparent"};

    border-radius: 6px;

    background: ${({ theme, $active }) =>
        $active ? `${theme.colors.primary}10` : "transparent"};

    color: ${({ theme, $active }) =>
        $active ? theme.colors.primary : theme.colors.text};

    text-align: left;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => `${theme.colors.primary}10`};
    }
`;

export const StructureItemIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    flex-shrink: 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
`;

export const StructureItemName = styled.span`
    overflow: hidden;

    font-size: 12px;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};

    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const StructureChildren = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-left: 18px;
    padding-left: 8px;

    border-left: 1px solid ${({ theme }) => theme.colors.border};
`;


import styled from "styled-components";

export const SectionItemButton = styled.button`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 12px;

    border: 1px solid
        ${({ theme, $active }) =>
            $active ? theme.colors.primary : theme.colors.border};

    border-radius: 8px;

    background: ${({ theme, $active }) =>
        $active ? `${theme.colors.primary}10` : theme.colors.white};

    color: ${({ theme }) => theme.colors.text};

    text-align: left;
    cursor: grab;

    opacity: ${({ $dragging }) => ($dragging ? 0.4 : 1)};

    box-shadow: ${({ $active }) =>
        $active ? "0 0 0 1px rgba(72, 178, 146, 0.08)" : "none"};

    transition:
        background ${({ theme }) => theme.transition.fast},
        border-color ${({ theme }) => theme.transition.fast},
        opacity ${({ theme }) => theme.transition.fast},
        box-shadow ${({ theme }) => theme.transition.fast};

    &:active {
        cursor: grabbing;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => `${theme.colors.primary}08`};
    }

    ${({ $dropPosition, theme }) =>
        $dropPosition === "before" &&
        `
            &::before {
                content: "";
                position: absolute;
                top: -5px;
                left: 0;
                right: 0;
                height: 3px;
                border-radius: 3px;
                background: ${theme.colors.primary};
            }
        `}

    ${({ $dropPosition, theme }) =>
        $dropPosition === "after" &&
        `
            &::after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                right: 0;
                height: 3px;
                border-radius: 3px;
                background: ${theme.colors.primary};
            }
        `}
`;

export const SectionName = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

export const SectionArrow = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 20px;
    transition: color ${({ theme }) => theme.transition.fast};

    ${SectionItemButton}:hover & {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

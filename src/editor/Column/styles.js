import styled from "styled-components";

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: auto;
    min-width: 0;
    max-width: 100%;

    box-sizing: border-box;

    grid-column: span ${({ $viewport, $desktop, $tablet, $mobile }) => {
        if ($viewport === "mobile") {
            return $mobile;
        }

        if ($viewport === "tablet") {
            return $tablet;
        }

        return $desktop;
    }};

    gap: ${({ $style }) =>
        $style.gap};

    padding-top: ${({ $style }) =>
        $style.paddingTop};

    padding-right: ${({ $style }) =>
        $style.paddingRight};

    padding-bottom: ${({ $style }) =>
        $style.paddingBottom};

    padding-left: ${({ $style }) =>
        $style.paddingLeft};

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;

    cursor: pointer;

        &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #3B82F6;
        border-radius: 4px;
        pointer-events: none;
        opacity: 0;
        z-index: 10;
    }

    &::before {
        left: -2px;
        opacity: ${({ $dropBefore }) => $dropBefore ? 1 : 0};
    }

    &::after {
        right: -2px;
        opacity: ${({ $dropAfter }) => $dropAfter ? 1 : 0};
    }
`;

export const ColumnDragHandle = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    transform: none;
    z-index: 20;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 24px;

    color: #fff;
    background: #3B82F6;
    border-radius: 4px;

    cursor: grab;
    opacity: 0;
    transition: opacity 0.2s;

    ${ColumnContainer}:hover & {
        opacity: 1;
    }

    &:active {
        cursor: grabbing;
    }
`;
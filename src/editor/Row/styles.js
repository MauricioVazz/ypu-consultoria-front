
import styled from "styled-components";

export const RowContainer = styled.div`
    position: relative;

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    width: 100%;
    max-width: 100%;
    min-width: 0;

    box-sizing: border-box;

    padding-top: ${({ $style }) => $style.paddingTop};
    padding-bottom: ${({ $style }) => $style.paddingBottom};
    padding-left: ${({ $style }) => $style.paddingLeft};
    padding-right: ${({ $style }) => $style.paddingRight};

    row-gap: ${({ $style }) => $style.gap};
    column-gap: 0;

    justify-content: ${({ $style }) => $style.justifyContent};
    align-items: ${({ $style }) => $style.alignItems};

    cursor: pointer;

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;

    /* Indicador de posição do Drag & Drop */
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;

        height: 3px;
        border-radius: 3px;

        background: #48B292;
        box-shadow: 0 0 6px rgba(72, 178, 146, 0.45);

        pointer-events: none;
        z-index: 10;
    }

    &::before {
        top: 0;
        display: ${({ $dropBefore }) =>
            $dropBefore ? "block" : "none"};
    }

    &::after {
        bottom: 0;
        display: ${({ $dropAfter }) =>
            $dropAfter ? "block" : "none"};
    }
`;

export const RowDragHandle = styled.button`
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    border: none;
    border-radius: 5px;

    background: #227F66;
    color: #FFFFFF;

    opacity: 0;
    cursor: grab;

    transition: opacity 0.2s ease;

    ${RowContainer}:hover & {
        opacity: 1;
    }

    &:active {
        cursor: grabbing;
    }
`;

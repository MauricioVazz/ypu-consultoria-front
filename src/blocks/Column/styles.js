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
`;
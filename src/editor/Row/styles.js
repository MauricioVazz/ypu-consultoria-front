import styled from "styled-components";

export const RowContainer = styled.div`
    position: relative;

    display: grid;

    grid-template-columns: repeat(
        12,
        minmax(0, 1fr)
    );

    width: 100%;
    max-width: 100%;
    min-width: 0;

    box-sizing: border-box;

    padding-top: ${({ $style }) =>
        $style.paddingTop};

    padding-bottom: ${({ $style }) =>
        $style.paddingBottom};

    padding-left: ${({ $style }) =>
        $style.paddingLeft};

    padding-right: ${({ $style }) =>
        $style.paddingRight};

    row-gap: ${({ $style }) =>
        $style.gap};

    column-gap: 0;

    justify-content: ${({ $style }) =>
        $style.justifyContent};

    align-items: ${({ $style }) =>
        $style.alignItems};

    cursor: pointer;

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;
`;
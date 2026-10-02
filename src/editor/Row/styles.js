import styled from "styled-components";

export const RowContainer = styled.div`
    position: relative;

    display: flex;

    width: 100%;
    box-sizing: border-box;

    background: transparent;

    cursor: pointer;

    padding-top: ${({ $style }) =>
        $style.paddingTop};

    padding-bottom: ${({ $style }) =>
        $style.paddingBottom};

    padding-left: ${({ $style }) =>
        $style.paddingLeft};

    padding-right: ${({ $style }) =>
        $style.paddingRight};

    gap: ${({ $style }) =>
        $style.gap};

    justify-content: ${({ $style }) =>
        $style.justifyContent};

    align-items: ${({ $style }) =>
        $style.alignItems};

    flex-wrap: ${({ $style }) =>
        $style.flexWrap};

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;
`;
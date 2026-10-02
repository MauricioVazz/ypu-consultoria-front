import styled from "styled-components";

import { resolveGridSpan } from "@/renderer/theme/resolveToken";

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    flex-grow: 1;
    flex-shrink: 1;

    min-width: 0;

    box-sizing: border-box;

    flex-basis: ${({ $desktop }) =>
        resolveGridSpan($desktop)};

    gap: ${({ $style }) =>
        $style.gap};

    padding: ${({ $style }) =>
        $style.padding};

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;

    cursor: pointer;

    @media (max-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
        flex-basis: ${({ $tablet }) =>
            resolveGridSpan($tablet)};
    }

    @media (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
        flex-basis: ${({ $mobile }) =>
            resolveGridSpan($mobile)};
    }
`;
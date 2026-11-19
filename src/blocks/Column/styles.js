
import styled from "styled-components";

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: auto;
    min-width: 0;
    max-width: 100%;

    box-sizing: border-box;

    grid-column: span ${({ $desktop }) => $desktop || 12};

    gap: ${({ $style }) => $style.gap};

    padding-top: ${({ $style }) => $style.paddingTop};
    padding-right: ${({ $style }) => $style.paddingRight};
    padding-bottom: ${({ $style }) => $style.paddingBottom};
    padding-left: ${({ $style }) => $style.paddingLeft};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-column: span ${({ $tablet }) => $tablet || 12};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-column: span ${({ $mobile }) => $mobile || 12};
    }
`;

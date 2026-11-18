
import styled from "styled-components";

export const ProjectsGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};

    width: calc(100% - 48px);
    margin: 0 auto;

    > * {
        flex: 0 1 calc((100% - 3 * ${({ theme }) => theme.spacing.md}) / 4);
        min-width: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        > * {
            flex-basis: calc((100% - ${({ theme }) => theme.spacing.md}) / 2);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;

        > * {
            flex-basis: 100%;
        }
    }
`;

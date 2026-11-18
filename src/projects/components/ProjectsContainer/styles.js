
import styled from "styled-components";

export const ProjectsContainerWrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.container.xl};
    margin: 0 auto;

    @media (min-width: 1600px) {
        width: calc(100% - 96px);
    }
`;

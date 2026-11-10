import styled from "styled-components";

export const SectionContainer = styled.section`
    position: relative;
    overflow: hidden;

    padding-top: ${({ $paddingTop }) => $paddingTop};
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom};

    background: ${({ $background }) => $background};
    min-height: ${({ $minHeight }) => $minHeight};

    cursor: pointer;

    outline: ${({ $isSelected }) =>
        $isSelected
            ? "3px solid #3B82F6"
            : "1px dashed transparent"};

    outline-offset: -3px;
`;

export const SectionOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: ${({ $opacity }) =>
        `rgba(0, 0, 0, ${$opacity / 100})`};

    z-index: 0;
`;

export const SectionContent = styled.div`
    position: relative;
    z-index: 1;
`;

export const SectionChildren = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ $gap }) => $gap};
`;
"use client";

import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ $maxWidth, theme }) =>
        theme.container[
            $maxWidth?.toLowerCase()
        ] ?? theme.container.xl};

    margin: 0 auto;
`;

export default function BuilderContainer({
    children,
    maxWidth = "XL",
}) {
    return (
        <Wrapper $maxWidth={maxWidth}>
            {children}
        </Wrapper>
    );
}
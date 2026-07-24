'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;

    grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);

    gap: ${({ theme, $gap }) =>
        theme.spacing[$gap?.toLowerCase()] ??
        theme.spacing.md};

    width: 100%;
`;

export default function Grid({

    columns = 3,

    gap = "MD",

    children

}) {

    return (

        <Wrapper
            $columns={columns}
            $gap={gap}
        >

            {children}

        </Wrapper>

    );

}
'use client';

import styled from 'styled-components';

const Wrapper = styled.div`

    background: ${({ theme }) => theme.colors.white};

    border: 1px solid ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.md};

    padding: ${({ theme }) => theme.spacing.md};

`;

export default function Card({

    children

}) {

    return (

        <Wrapper>

            {children}

        </Wrapper>

    );

}
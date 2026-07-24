'use client';

import styled from "styled-components";

export const ToolbarContainer = styled.header`

    display:flex;
    align-items:center;
    justify-content:space-between;

    height:100%;
    padding:0 24px;

    border-bottom:1px solid ${({theme})=>theme.colors.border};

    background:${({theme})=>theme.colors.background};

    .left,
    .center,
    .right{

        display:flex;
        align-items:center;

    }

    .left{

        gap:16px;

    }

    .center{

        flex-direction:column;
        gap:4px;

    }

    .right{

        gap:12px;

    }

`;
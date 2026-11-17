'use client';

import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 280px;

    height: 100%;
    min-height: 0;

    flex-shrink: 0;

    padding: 24px;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;
    
    border-right: 1px solid ${({ theme }) => theme.colors.border};
`;


export const DeleteSection = styled.div`
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DeleteButton = styled.button`
    width: 100%;
    padding: 10px 14px;

    border: 1px solid #C44545;
    border-radius: 6px;

    background: transparent;
    color: #C44545;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: background 0.2s ease;

    &:hover:not(:disabled) {
        background: rgba(196, 69, 69, 0.08);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

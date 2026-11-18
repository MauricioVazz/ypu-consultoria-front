
import styled from "styled-components";

export const UploadButton = styled.button`
    padding: 10px 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const StatusMessage = styled.p`
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 13px;
`;

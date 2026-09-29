import styled from "styled-components";

export const Container = styled.div`  display: flex;
  flex-direction: column;
  gap: 8px;`;

export const UploadButton = styled.button`
width: 100%;
padding: 10px 12px;

border: 1px dashed ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.radius.sm};

background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.green};

font-size: 13px;
font-weight: 500;

cursor: pointer;

transition: ${({ theme }) => theme.transition.fast};

&:hover:not(:disabled) {
background: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.white};
}

&:disabled {
opacity: 0.5;
cursor: not-allowed;
}
`;

export const HiddenInput = styled.input`  display: none;`;

export const StatusMessage = styled.span`  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};`;
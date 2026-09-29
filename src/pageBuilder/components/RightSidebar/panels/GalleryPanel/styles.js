import styled from "styled-components";

export const PanelContainer = styled.div`  display: flex;
  flex-direction: column;
  gap: 20px;`;

export const PanelHeader = styled.div`  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;`;

export const PanelTitle = styled.h3`
margin: 0;

font-size: 16px;
font-weight: 600;
color: ${({ theme }) => theme.colors.text};
`;

export const SaveButton = styled.button`
padding: 8px 14px;

border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.radius.sm};

background: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.white};

font-size: 13px;
font-weight: 500;

cursor: pointer;

transition: ${({ theme }) => theme.transition.fast};

&:hover:not(:disabled) {
opacity: 0.9;
}

&:disabled {
opacity: 0.5;
cursor: not-allowed;
}
`;

export const Section = styled.section`  display: flex;
  flex-direction: column;
  gap: 12px;`;

export const SectionTitle = styled.h4`
margin: 0;

font-size: 14px;
font-weight: 600;
color: ${({ theme }) => theme.colors.text};
`;

export const DebugSection = styled.section`  display: flex;
  flex-direction: column;
  gap: 8px;`;

export const DebugTitle = styled.h4`
margin: 0;

font-size: 13px;
font-weight: 600;
color: ${({ theme }) => theme.colors.gray};
`;

export const DebugContent = styled.div`
padding: 12px;

border: 1px solid ${({ theme }) => theme.colors.border};
border-radius: ${({ theme }) => theme.radius.sm};

background: ${({ theme }) => theme.colors.canvas};

overflow-x: auto;

pre {
margin: 0;

font-size: 11px;
line-height: 1.5;
color: ${({ theme }) => theme.colors.text};

}
`;

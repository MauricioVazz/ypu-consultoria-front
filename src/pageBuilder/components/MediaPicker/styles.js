import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background: rgba(0, 0, 0, 0.55);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;

  width: min(1200px, 95vw);
  height: min(800px, 90vh);

  background: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radius.lg};

  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 24px;

  border-bottom: 1px solid ${({ theme }) =>
    theme.colors.border};
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 18px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  padding: 0;

  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};

  background: transparent;
  color: ${({ theme }) => theme.colors.gray};

  font-size: 26px;
  line-height: 1;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Content = styled.main`
  flex: 1;

  padding: 24px;

  overflow-y: auto;

  background: ${({ theme }) => theme.colors.canvas};
`;

export const ImageGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(
    auto-fill,
    minmax(180px, 1fr)
  );

  gap: 16px;
`;

export const ImageOption = styled.button`
  position: relative;

  display: flex;

  aspect-ratio: 1 / 1;

  padding: 0;

  overflow: hidden;

  border: 2px solid
    ${({ theme, $selected }) =>
      $selected
        ? theme.colors.primary
        : theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.primary};
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
`;

export const SelectedLabel = styled.span`
  position: absolute;

  left: 8px;
  bottom: 8px;

  padding: 5px 8px;

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  font-size: 11px;
  font-weight: 600;
`;

export const LoadingMessage = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.gray};

  font-size: 13px;
`;

export const EmptyMessage = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.gray};

  font-size: 13px;
`;

export const ErrorMessage = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.danger};

  font-size: 13px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 12px;

  padding: 16px 24px;

  border-top: 1px solid ${({ theme }) =>
    theme.colors.border};
`;

export const CancelButton = styled.button`
  padding: 10px 16px;

  border: 1px solid ${({ theme }) =>
    theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.background};
  }
`;

export const SelectButton = styled.button`
  padding: 10px 18px;

  border: 1px solid ${({ theme }) =>
    theme.colors.primary};

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    opacity: 0.9;
  }
`;
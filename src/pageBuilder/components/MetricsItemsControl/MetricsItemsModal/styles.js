import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${({ theme }) => theme.spacing.md};

    background: rgba(0, 0, 0, 0.45);
`;

export const ModalContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 760px;
    max-height: 85vh;

    background: ${({ theme }) =>
        theme.colors.white};

    border-radius: ${({ theme }) =>
        theme.radius.md};

    overflow: visible;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) => theme.spacing.md};

    border-bottom: 1px solid ${({ theme }) =>
        theme.colors.border};
`;

export const ModalTitle = styled.h2`
    margin: 0;

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h5};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const CloseButton = styled.button`
    width: 36px;
    height: 36px;

    border: none;
    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: 24px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};
    }
`;

export const ModalContent = styled.div`
    padding: ${({ theme }) => theme.spacing.md};

    overflow-y: auto;
`;

export const ItemsGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(
        3,
        minmax(0, 1fr)
    );

    gap: ${({ theme }) => theme.spacing.sm};

    margin-top: ${({ theme }) =>
        theme.spacing.md};

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const PreviewCard = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 0;
    min-height: 150px;

    padding: ${({ theme }) => theme.spacing.md};

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.md};

    background: ${({ theme }) =>
        theme.colors.white};

    text-align: center;
`;

export const PreviewValue = styled.strong`
    color: ${({ theme }) =>
        theme.colors.green};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h3};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.bold};

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.heading};

    overflow-wrap: anywhere;
`;

export const PreviewLabel = styled.span`
    margin-top: ${({ theme }) =>
        theme.spacing.xs};

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    line-height: 1.5;

    overflow-wrap: anywhere;
`;

export const EmptyMessage = styled.p`
    margin: ${({ theme }) => theme.spacing.md} 0;

    color: ${({ theme }) =>
        theme.colors.gray};

    text-align: center;
`;

export const AddButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px dashed ${({ theme }) =>
        theme.colors.primary};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.green};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    cursor: pointer;

    &:hover:not(:disabled) {
        background: ${({ theme }) =>
            theme.colors.background};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const CardMenu = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
`;

export const CardMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    border: none;
    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: 22px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};
    }
`;

export const CardMenuDropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;

    display: flex;
    flex-direction: column;

    min-width: 120px;
    padding: 4px;

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
`;

export const CardMenuItem = styled.button`
    padding: ${({ theme }) => theme.spacing.xs};

    border: none;
    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme, $danger }) =>
        $danger
            ? theme.colors.danger
            : theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    text-align: left;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.xs};

    padding: ${({ theme }) => theme.spacing.md};

    border-top: 1px solid ${({ theme }) =>
        theme.colors.border};
`;

export const CancelButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.text};

    cursor: pointer;
`;

export const ConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) =>
        theme.colors.primary};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.primary};

    color: ${({ theme }) =>
        theme.colors.white};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.green};
    }
`;
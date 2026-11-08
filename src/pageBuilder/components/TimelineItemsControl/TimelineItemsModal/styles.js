
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px;

    background: rgba(0, 0, 0, 0.45);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 680px;
    max-height: 85vh;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;

    overflow: hidden;

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 24px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ModalTitle = styled.h2`
    margin: 0;

    font-size: 18px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    border: none;
    border-radius: 8px;

    background: transparent;
    color: ${({ theme }) => theme.colors.gray};

    font-size: 24px;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 24px;

    overflow-y: auto;
`;

export const ItemsList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PreviewItem = styled.div`
    display: flex;
    gap: 16px;

    min-height: 110px;
`;

export const TimelineIndicator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20px;
    flex-shrink: 0;

    span {
        width: 16px;
        height: 16px;

        flex-shrink: 0;

        border-radius: 50%;

        background: ${({ theme }) => theme.colors.white};
        border: 4px solid ${({ theme }) => theme.colors.primary};

        z-index: 1;
    }

    &::after {
        content: "";

        width: 2px;
        flex: 1;

        background: ${({ theme }) => theme.colors.border};

        visibility: ${({ $isLast }) =>
            $isLast ? "hidden" : "visible"};
    }
`;

export const PreviewContent = styled.div`
    position: relative;

    flex: 1;
    min-width: 0;

    margin-bottom: 24px;
    padding: 16px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.background};

    overflow-wrap: anywhere;
`;

export const PreviewDate = styled.span`
    display: block;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.colors.primary};

    font-size: 12px;
    font-weight: 600;
`;

export const PreviewTitle = styled.h3`
    margin: 0 0 8px;

    color: ${({ theme }) => theme.colors.text};

    font-size: 15px;
    font-weight: 600;
`;

export const PreviewDescription = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: 13px;
    line-height: 1.6;

    white-space: pre-wrap;
`;

export const EmptyMessage = styled.p`
    padding: 32px 16px;

    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: 13px;
    text-align: center;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;

    padding: 20px 24px;

    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CancelButton = styled.button`
    padding: 10px 16px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-size: 13px;
    font-weight: 500;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const ConfirmButton = styled.button`
    padding: 10px 18px;

    border: none;
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const AddButton = styled.button`
    align-self: flex-start;

    padding: 10px 14px;

    border: 1px dashed ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    background: transparent;
    color: ${({ theme }) => theme.colors.primary};

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const CardMenu = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const CardMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    border: none;
    border-radius: 6px;

    background: transparent;
    color: ${({ theme }) => theme.colors.gray};

    font-size: 20px;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.surface};
    }
`;

export const CardMenuDropdown = styled.div`
    position: absolute;
    top: 32px;
    right: 0;

    z-index: 10;

    display: flex;
    flex-direction: column;

    min-width: 120px;

    padding: 4px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const CardMenuItem = styled.button`
    padding: 9px 10px;

    border: none;
    border-radius: 5px;

    background: transparent;

    color: ${({ $danger, theme }) =>
        $danger ? theme.colors.danger : theme.colors.text};

    font-size: 12px;
    text-align: left;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

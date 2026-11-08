
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1010;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px;

    background: rgba(0, 0, 0, 0.45);
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 520px;
    max-height: 85vh;

    overflow-y: auto;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;

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

    font-size: 17px;
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
    gap: 18px;

    padding: 24px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-size: 13px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;

    padding: 11px 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-size: 13px;

    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: #9CA3AF;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;

    padding: 11px 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: inherit;
    font-size: 13px;
    line-height: 1.6;

    resize: vertical;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: #9CA3AF;
    }
`;

export const HelperText = styled.span`
    font-size: 11px;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.gray};
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


import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(20, 35, 30, 0.58);
    backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 460px;
    padding: 30px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

    @media (max-width: 600px) {
        padding: 24px 20px;
    }
`;

export const ModalHeader = styled.div`
    margin-bottom: 24px;
`;

export const ModalEyebrow = styled.span`
    display: block;
    margin-bottom: 9px;
    color: ${({ theme }) => theme.colors.green};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const ModalTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
`;

export const ModalDescription = styled.p`
    margin: 10px 0 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 13px;
    line-height: 1.6;
`;

export const WarningMessage = styled.div`
    margin-bottom: 20px;
    padding: 12px 14px;
    border: 1px solid #F0DFB8;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: #FFF8E9;
    color: #80601F;
    font-size: 12px;
    line-height: 1.5;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 650;
`;

export const Keyword = styled.strong`
    color: ${({ theme }) => theme.colors.green};
    font-weight: 750;
`;

export const Input = styled.input`
    width: 100%;
    padding: 13px 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    outline: none;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(72, 178, 146, 0.12);
    }
`;

export const ErrorMessage = styled.span`
    color: #A33D38;
    font-size: 12px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 26px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 420px) {
        flex-direction: column-reverse;

        button {
            width: 100%;
        }
    }
`;

export const CancelButton = styled.button`
    padding: 11px 17px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.background};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ConfirmButton = styled.button`
    padding: 11px 18px;
    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ $danger, theme }) =>
        $danger ? "#C44545" : theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 650;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
        background: ${({ $danger, theme }) =>
            $danger ? "#A93636" : theme.colors.green};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

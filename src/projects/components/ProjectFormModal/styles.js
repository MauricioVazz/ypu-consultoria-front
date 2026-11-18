
import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(20, 35, 30, 0.58);
    backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 620px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 36px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

    @media (max-width: 600px) {
        padding: 24px 20px;
        max-height: 94vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 28px;
`;

export const ModalEyebrow = styled.span`
    display: block;
    margin-bottom: 9px;
    color: ${({ theme }) => theme.colors.green};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.4px;
`;

export const ModalTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 25px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 600px) {
        font-size: 21px;
    }
`;

export const ModalDescription = styled.p`
    max-width: 460px;
    margin: 9px 0 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    line-height: 1.6;
`;

export const CloseButton = styled.button`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 25px;
    line-height: 1;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const Stepper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radius.sm};

    .step-line {
        flex: 1;
        height: 1px;
        background: ${({ theme }) => theme.colors.border};
    }

    @media (max-width: 420px) {
        gap: 8px;
        padding: 12px;

        .step-line {
            min-width: 12px;
        }
    }
`;

export const Step = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    opacity: ${({ $active, $done }) => ($active || $done ? 1 : 0.55)};
`;

export const StepNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background: ${({ $active, $done, theme }) =>
        $active || $done ? theme.colors.green : theme.colors.white};
    color: ${({ $active, $done, theme }) =>
        $active || $done ? theme.colors.white : theme.colors.gray};
    border: 1px solid ${({ $active, $done, theme }) =>
        $active || $done ? theme.colors.green : theme.colors.border};
    font-size: 12px;
    font-weight: 700;
`;

export const StepLabel = styled.span`
    color: ${({ $active, $done, theme }) =>
        $active || $done ? theme.colors.text : theme.colors.gray};
    font-size: 12px;
    font-weight: ${({ $active, $done }) =>
        $active || $done ? 700 : 500};

    @media (max-width: 420px) {
        font-size: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    small {
        align-self: flex-end;
        color: ${({ theme }) => theme.colors.gray};
        font-size: 11px;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 650;
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

    &::placeholder {
        color: #9A9F9D;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(72, 178, 146, 0.12);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 110px;
    padding: 13px 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    outline: none;
    resize: vertical;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    font-size: 14px;
    line-height: 1.5;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder {
        color: #9A9F9D;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(72, 178, 146, 0.12);
    }
`;

export const CoverSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const CoverDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    strong {
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
    }

    span {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 13px;
        line-height: 1.6;
    }
`;

export const CoverActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ActionButton = styled.button`
    padding: 11px 15px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.green};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const CoverPreview = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.background};
`;

export const CoverImage = styled.img`
    width: 104px;
    height: 76px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 6px;
`;

export const CoverInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    strong {
        color: ${({ theme }) => theme.colors.text};
        font-size: 13px;
    }

    span {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
        line-height: 1.5;
    }
`;

export const FeedbackMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 14px;
    border-radius: ${({ theme }) => theme.radius.sm};
    font-size: 12px;
    line-height: 1.5;

    ${({ $type }) => {
        if ($type === "success") {
            return `
                background: #EDF7F1;
                color: #276747;
                border: 1px solid #D4EBDD;
            `;
        }

        if ($type === "error") {
            return `
                background: #FFF1F0;
                color: #A33D38;
                border: 1px solid #F3D5D2;
            `;
        }

        return `
            background: #F2F6F4;
            color: #53665E;
            border: 1px solid #E1EAE5;
        `;
    }}
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 8px;
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
    padding: 12px 18px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const SubmitButton = styled.button`
    padding: 12px 20px;
    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.green};
    color: white;
    font-size: 13px;
    font-weight: 650;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.darkGreen};
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.65;
        cursor: wait;
    }
`;

import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${({ theme }) => theme.spacing.md};

    background: rgba(0, 0, 0, 0.45);

    z-index: 1100;
`;

export const ModalContainer = styled.div`
    width: min(520px, 100%);
    max-height: 85vh;

    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.white};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};

    overflow-y: auto;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) => theme.spacing.sm};

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ModalTitle = styled.h2`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const CloseButton = styled.button`
    width: 36px;
    height: 36px;

    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};

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
    gap: ${({ theme }) => theme.spacing.sm};

    padding: ${({ theme }) => theme.spacing.md};
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const Input = styled.input`
    width: 100%;
    min-height: 42px;
    box-sizing: border-box;

    padding: ${({ theme }) => `0 ${theme.spacing.sm}`};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.p};

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 1px;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    resize: vertical;

    padding: ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 1px;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};

    padding: ${({ theme }) => theme.spacing.sm};

    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CancelButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.background};
    }
`;

export const ConfirmButton = styled.button`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.green};
        border-color: ${({ theme }) => theme.colors.green};
    }
`;

export const HelperText = styled.small`
    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.body};
`;

export const IconsLink = styled.a`
    align-self: flex-start;

    color: ${({ theme }) =>
        theme.colors.primary};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    text-decoration: none;

    &:hover {
        color: ${({ theme }) =>
            theme.colors.green};

        text-decoration: underline;
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;

        border-radius: ${({ theme }) =>
            theme.radius.sm};
    }
`;
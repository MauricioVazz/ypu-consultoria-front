import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1001;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${({ theme }) => theme.spacing.md};

    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 480px;

    background: ${({ theme }) =>
        theme.colors.white};

    border-radius: ${({ theme }) =>
        theme.radius.md};

    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    padding: ${({ theme }) => theme.spacing.md};
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const Input = styled.input`
    width: 100%;
    min-height: 42px;
    box-sizing: border-box;

    padding: 0 ${({ theme }) => theme.spacing.sm};

    border: 1px solid ${({ theme }) =>
        theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.text};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.p};

    &:focus {
        outline: 2px solid ${({ theme }) =>
            theme.colors.primary};

        outline-offset: 1px;
    }
`;

export const HelperText = styled.span`
    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    line-height: 1.5;
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
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    padding: ${({ theme }) => theme.spacing.sm};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    `;

export const CardHeader = styled.div`    display: flex;
        align-items: center;`;

export const CardNumber = styled.span`
    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.gray};

    `;

export const FieldGroup = styled.div`    display: flex;
        flex-direction: column;
        gap: 6px;`;

export const FieldLabel = styled.label`
    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.medium};

    color: ${({ theme }) =>
        theme.colors.text};

    `;

export const TextInput = styled.input`
    width: 100%;
    min-height: 40px;

    box-sizing: border-box;

    padding: 0 ${({ theme }) =>
        theme.spacing.xs};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

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

    outline: none;

    &:focus {
        border-color: ${({ theme }) =>
        theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) =>
        theme.colors.gray};
    }

    `;

export const TextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;

    padding: ${({ theme }) => theme.spacing.xs};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

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

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.body};

    resize: vertical;
    outline: none;

    &:focus {
        border-color: ${({ theme }) =>
        theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) =>
        theme.colors.gray};
    }

`;

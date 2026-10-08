import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${({ theme }) =>
        theme.spacing.md};

    background: rgba(0, 0, 0, 0.45);

    z-index: 1000;
`;

export const ModalContainer = styled.div`
    width: min(900px, 100%);
    max-height: 80vh;

    display: flex;
    flex-direction: column;

    background: ${({ theme }) =>
        theme.colors.white};

    border-radius: ${({ theme }) =>
        theme.radius.md};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    overflow: hidden;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) =>
        theme.spacing.sm};

    border-bottom: 1px solid
        ${({ theme }) => theme.colors.border};
`;

export const ModalTitle = styled.h2`
    margin: 0;

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h5};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    color: ${({ theme }) =>
        theme.colors.text};
`;

export const CloseButton = styled.button`
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: 24px;
    line-height: 1;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};

        color: ${({ theme }) =>
            theme.colors.text};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;

export const ModalContent = styled.div`
    flex: 1;

    padding: ${({ theme }) =>
        theme.spacing.md};

    overflow-y: auto;
`;

export const AddButton = styled.button`
    min-height: 40px;

    align-self: flex-start;

    margin-bottom: ${({ theme }) =>
        theme.spacing.sm};

    padding: 0 ${({ theme }) =>
        theme.spacing.sm};

    border: 1px solid
        ${({ theme }) =>
            theme.colors.primary};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    color: ${({ theme }) =>
        theme.colors.primary};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

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

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: ${({ theme }) =>
        theme.spacing.sm};

    /*
     * 3 colunas
     *
     * 4 cards:
     * o o o
     * x o x
     */
    & > :nth-child(4):last-child {
        grid-column: 2;
    }

    /*
     * 5 cards:
     * o o o
     * o x o
     */
    & > :nth-child(4):nth-last-child(2) {
        grid-column: 1;
    }

    & > :nth-child(5):last-child {
        grid-column: 3;
    }

    /*
     * 7 cards:
     * o o o
     * o o o
     * x o x
     */
    & > :nth-child(7):last-child {
        grid-column: 2;
    }

    /*
     * 8 cards:
     * o o o
     * o o o
     * o x o
     */
    & > :nth-child(7):nth-last-child(2) {
        grid-column: 1;
    }

    & > :nth-child(8):last-child {
        grid-column: 3;
    }

    @media (max-width: 900px) {
        /*
         * 2 colunas
         */
        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        /*
         * 3 cards:
         * o o
         * x o
         */
        & > :nth-child(3):last-child {
            grid-column: 2;
        }

        /*
         * 5 cards:
         * o o
         * o o
         * x o
         */
        & > :nth-child(5):last-child {
            grid-column: 2;
        }

        /*
         * 7 cards:
         * o o
         * o o
         * o o
         * x o
         */
        & > :nth-child(7):last-child {
            grid-column: 2;
        }
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        & > * {
            grid-column: auto;
        }
    }
`;

export const PreviewCard = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${({ theme }) =>
        theme.spacing.md};

    border: 1px solid
        ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.md};

    background: ${({ theme }) =>
        theme.colors.white};

    text-align: center;

    transition:
        border-color
            ${({ theme }) =>
                theme.transition.fast},
        transform
            ${({ theme }) =>
                theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) =>
            theme.colors.primary};

        transform: translateY(-2px);
    }
`;

export const CardMenu = styled.div`
    position: absolute;

    top: ${({ theme }) =>
        theme.spacing.xs};

    right: ${({ theme }) =>
        theme.spacing.xs};

    z-index: 2;
`;

export const CardMenuButton = styled.button`
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: transparent;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: 20px;
    line-height: 1;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};

        color: ${({ theme }) =>
            theme.colors.text};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;

export const CardMenuDropdown = styled.div`
    position: absolute;

    top: 100%;
    right: 0;

    min-width: 120px;

    display: flex;
    flex-direction: column;

    padding: ${({ theme }) =>
        theme.spacing.xs};

    border: 1px solid
        ${({ theme }) =>
            theme.colors.border};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.white};

    box-shadow:
        0 8px 24px
        rgba(0, 0, 0, 0.12);
`;

export const CardMenuItem = styled.button`
    width: 100%;

    padding: ${({ theme }) =>
        theme.spacing.xs};

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

export const PreviewIcon = styled.div`
    width: 56px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${({ theme }) =>
        theme.spacing.sm};

    border-radius: 50%;

    background: ${({ theme }) =>
        theme.colors.primary};

    color: ${({ theme }) =>
        theme.colors.white};

    font-size: 24px;

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const PreviewTitle = styled.h3`
    width: 100%;

    margin: 0 0
        ${({ theme }) =>
            theme.spacing.xs};

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h5};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const PreviewDescription = styled.p`
    width: 100%;

    margin: 0;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.body};
`;

export const EmptyMessage = styled.p`
    margin: 0;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.p};
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;

    gap: ${({ theme }) =>
        theme.spacing.xs};

    padding: ${({ theme }) =>
        theme.spacing.sm};

    border-top: 1px solid
        ${({ theme }) => theme.colors.border};
`;

export const CancelButton = styled.button`
    min-height: 40px;

    padding: 0 ${({ theme }) =>
        theme.spacing.sm};

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
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.medium};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.background};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;

export const ConfirmButton = styled.button`
    min-height: 40px;

    padding: 0 ${({ theme }) =>
        theme.spacing.sm};

    border: 1px solid
        ${({ theme }) =>
            theme.colors.primary};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.primary};

    color: ${({ theme }) =>
        theme.colors.white};

    font-family: ${({ theme }) =>
        theme.typography.fontFamily};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};

    cursor: pointer;

    &:hover {
        background: ${({ theme }) =>
            theme.colors.green};

        border-color: ${({ theme }) =>
            theme.colors.green};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme }) =>
                theme.colors.primary};

        outline-offset: 2px;
    }
`;
import styled from "styled-components";

export const GridWrapper = styled.div`
    display: grid;

    grid-template-columns: repeat(
        ${({ $columns }) => $columns},
        minmax(0, 1fr)
    );

    gap: ${({ theme, $gap }) =>
        theme.spacing[$gap?.toLowerCase()] ??
        theme.spacing.md};

    width: 100%;
    min-width: 0;
    align-items: start;

    /* Distribuição especial da última linha */
    @media (min-width: 1025px) {
        ${({ $columns, $itemCount }) => {
            if (!$itemCount || $itemCount <= $columns) return "";

            const remainder = $itemCount % $columns;

            if (remainder === 0) return "";

            if ($columns === 3) {
                if (remainder === 1) {
                    return `
                        & > :nth-child(${$itemCount}) {
                            grid-column: 2;
                        }
                    `;
                }

                if (remainder === 2) {
                    return `
                        & > :nth-child(${$itemCount - 1}) {
                            grid-column: 1;
                        }

                        & > :nth-child(${$itemCount}) {
                            grid-column: 3;
                        }
                    `;
                }
            }

            if ($columns === 4) {
                if (remainder === 1) {
                    return `
                        & > :nth-child(${$itemCount}) {
                            grid-column: 2 / 4;
                        }
                    `;
                }

                if (remainder === 2) {
                    return `
                        & > :nth-child(${$itemCount - 1}) {
                            grid-column: 2;
                        }

                        & > :nth-child(${$itemCount}) {
                            grid-column: 3;
                        }
                    `;
                }

                if (remainder === 3) {
                    return `
                        & > :nth-child(${$itemCount - 2}) {
                            grid-column: 1;
                        }

                        & > :nth-child(${$itemCount - 1}) {
                            grid-column: 2;
                        }

                        & > :nth-child(${$itemCount}) {
                            grid-column: 4;
                        }
                    `;
                }
            }

            return "";
        }}
    }

    /* Tablet */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(
            ${({ $columns }) => Math.min($columns, 2)},
            minmax(0, 1fr)
        );
    }

    /* Mobile */
    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        gap: ${({ theme }) => theme.spacing.sm};
    }

    /* Celulares pequenos */
    @media (max-width: 480px) {
        gap: ${({ theme }) => theme.spacing.xs};
    }
`;
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

    align-items: start;

    /*
     * Distribuição especial da última linha.
     *
     * Somente quando estamos realmente
     * trabalhando com desktop.
     */
    ${({ $columns, $itemCount, $viewport }) => {
        if (
            $viewport !== "desktop" &&
            $viewport !== "desktopFullHD"
        ) {
            return "";
        }

        if (
            !$itemCount ||
            $itemCount <= $columns
        ) {
            return "";
        }

        const remainder =
            $itemCount % $columns;

        if (remainder === 0) {
            return "";
        }

        /*
         * 3 COLUNAS
         */
        if ($columns === 3) {
            if (remainder === 1) {
                return `
                    & > :nth-child(${ $itemCount }) {
                        grid-column: 2;
                    }
                `;
            }

            if (remainder === 2) {
                return `
                    & > :nth-child(${ $itemCount - 1 }) {
                        grid-column: 1;
                    }

                    & > :nth-child(${ $itemCount }) {
                        grid-column: 3;
                    }
                `;
            }
        }

        /*
         * 4 COLUNAS
         */
        if ($columns === 4) {
            if (remainder === 1) {
                return `
                    & > :nth-child(${ $itemCount }) {
                        grid-column: 2 / 4;
                    }
                `;
            }

            if (remainder === 2) {
                return `
                    & > :nth-child(${ $itemCount - 1 }) {
                        grid-column: 2;
                    }

                    & > :nth-child(${ $itemCount }) {
                        grid-column: 3;
                    }
                `;
            }

            if (remainder === 3) {
                return `
                    & > :nth-child(${ $itemCount - 2 }) {
                        grid-column: 1;
                    }

                    & > :nth-child(${ $itemCount - 1 }) {
                        grid-column: 2;
                    }

                    & > :nth-child(${ $itemCount }) {
                        grid-column: 4;
                    }
                `;
            }
        }

        return "";
    }}

    /*
     * TABLET
     *
     * O número de colunas já é controlado
     * pelo viewport no Grid/index.js.
     */
    @media (max-width: 1024px) {
        gap: ${({ theme, $gap }) => {
            const value =
                theme.spacing[
                    $gap?.toLowerCase()
                ];

            return (
                value ||
                theme.spacing.md
            );
        }};
    }

    /*
     * MOBILE
     */
    @media (max-width: 768px) {
        gap: ${({ theme }) =>
            theme.spacing.sm};
    }

    /*
     * CELULARES PEQUENOS
     */
    @media (max-width: 480px) {
        gap: ${({ theme }) =>
            theme.spacing.xs};
    }
`;
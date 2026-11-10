import styled from "styled-components";

export const FeatureCard = styled.div`
    ${({ $cardStyle }) => $cardStyle}

    display: flex;
    flex-direction: column;

    align-items: ${({ $align }) => {
        switch ($align) {
            case "LEFT":
                return "flex-start";

            case "RIGHT":
                return "flex-end";

            case "CENTER":
            default:
                return "center";
        }
    }};

    padding: ${({ $padding }) => $padding};

    width: 100%;
    min-width: 0;
    box-sizing: border-box;

    text-align: ${({ $textAlign }) => $textAlign};

    overflow-wrap: anywhere;

    /*
     * TABLET
     */
    @media (max-width: 1024px) {
        padding: ${({ theme }) =>
            theme.spacing.md};
    }

    /*
     * MOBILE
     */
    @media (max-width: 768px) {
        padding: ${({ theme }) =>
            theme.spacing.sm};

        width: 100%;
    }
`;

export const IconContainer = styled.div`
    width: 56px;
    height: 56px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${({ theme }) =>
        theme.spacing.md};

    border-radius: 50%;

    background: ${({ theme }) =>
        theme.colors.primary};

    color: ${({ theme }) =>
        theme.colors.white};

    font-size: 24px;

    /*
     * TABLET
     */
    @media (max-width: 1024px) {
        width: 52px;
        height: 52px;

        margin-bottom: ${({ theme }) =>
            theme.spacing.sm};

        font-size: 22px;
    }

    /*
     * MOBILE
     */
    @media (max-width: 768px) {
        width: 44px;
        height: 44px;

        margin-bottom: ${({ theme }) =>
            theme.spacing.xs};

        font-size: 18px;
    }

    /*
     * CELULARES PEQUENOS
     */
    @media (max-width: 480px) {
        width: 40px;
        height: 40px;

        font-size: 17px;
    }
`;

export const FeatureTitle = styled.h3`
    width: 100%;

    margin: 0 0
        ${({ theme }) =>
            theme.spacing.xs};

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h4};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.bold};

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.heading};

    overflow-wrap: anywhere;

    /*
     * TABLET
     */
    @media (max-width: 1024px) {
        font-size: ${({ theme }) =>
            theme.typography.fontSize.h5};
    }

    /*
     * MOBILE
     */
    @media (max-width: 768px) {
        font-size: 1rem;

        line-height: 1.3;

        margin-bottom: ${({ theme }) =>
            theme.spacing.xs};
    }

    /*
     * CELULARES PEQUENOS
     */
    @media (max-width: 480px) {
        font-size: 0.9375rem;

        line-height: 1.3;
    }
`;

export const FeatureDescription = styled.p`
    width: 100%;

    margin: 0;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.p};

    line-height: ${({ theme }) =>
        theme.typography.lineHeight.body};

    overflow-wrap: anywhere;

    /*
     * MOBILE
     */
    @media (max-width: 768px) {
        font-size: 0.875rem;

        line-height: 1.5;
    }

    /*
     * CELULARES PEQUENOS
     */
    @media (max-width: 480px) {
        font-size: 0.8125rem;

        line-height: 1.45;
    }
`;
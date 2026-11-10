import styled from "styled-components";

import { theme } from "@/styles/theme";

export const MetricCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) => $align};
    justify-content: center;

    width: 100%;
    min-width: 0;
    box-sizing: border-box;

    padding: ${({ $padding }) => $padding};
    border-radius: ${({ $radius }) => $radius};

    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);

    text-align: ${({ $align }) =>
    $align === "flex-start" ? "left" : "center"};

    overflow-wrap: anywhere;
`;

export const MetricValue = styled.h2`
    margin: 0;

    font-size: ${({ $fontSize }) => $fontSize};
    color: ${({ $color }) => $color};

    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.heading};

    overflow-wrap: anywhere;

    @media (max-width: 1024px) {
        font-size: ${theme.typography.fontSize.h3};
    }

    @media (max-width: 768px) {
        font-size: ${theme.typography.fontSize.h4};
    }

    @media (max-width: 480px) {
        font-size: ${theme.typography.fontSize.h5};
    }
`;

export const MetricLabel = styled.p`
    margin: 0;
    margin-top: ${({ $marginTop }) => $marginTop};

    color: ${({ $color }) => $color};
    font-size: ${({ $fontSize }) => $fontSize};

    line-height: ${theme.typography.lineHeight.body};

    overflow-wrap: anywhere;

    @media (max-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 0.8125rem;
        line-height: 1.45;
    }
`;
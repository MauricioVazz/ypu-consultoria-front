import styled from "styled-components";

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `;

export const TimelineItem = styled.div`
    display: flex;
    align-items: stretch;
    gap: 24px;
    width: 100%;
    `;

export const TimelineTrack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 24px;
    `;

export const TimelineDot = styled.div`
    position: relative;
    z-index: 1;

    width: 18px;
    height: 18px;
    flex-shrink: 0;

    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    border: 4px solid ${({ theme }) => theme.colors.primary};

    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}20`};
    `;

export const TimelineLine = styled.div`
    width: 2px;

    flex: ${({ $last }) => ($last ? "none" : 1)};

    height: ${({ $last }) => ($last ? "40px" : "auto")};
    min-height: ${({ $last }) => ($last ? "40px" : "32px")};

    max-height: ${({ $last }) => ($last ? "40px" : "none")};

    background: ${({ theme }) => theme.colors.border};
    `;

export const TimelineContent = styled.div`
    flex: 1;
    min-width: 0;
    padding-bottom: ${({ $gap, $last }) =>
        $last ? "0" : $gap};
    `;

export const TimelineCard = styled.div`
    width: 100%;
    padding: ${({ $cardStyle }) =>
        $cardStyle === "NONE" ? "0" : "20px 24px"};

    border: ${({ theme, $cardStyle }) =>
        $cardStyle === "OUTLINE"
            ? `1px solid ${theme.colors.border}`
            : "1px solid transparent"};

    border-radius: ${({ $radius }) => $radius};

    transition: ${({ theme }) => theme.transition.normal};
    `;

export const TimelineDate = styled.small`
    display: block;
    margin-bottom: 8px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    `;

export const TimelineTitle = styled.h3`
    margin: 0 0 10px;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ $fontSize }) => $fontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    text-align: ${({ $textAlign }) => $textAlign};
    `;

export const TimelineDescription = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ $fontSize }) => $fontSize};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    text-align: ${({ $textAlign }) => $textAlign};
    `;
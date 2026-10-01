import styled from "styled-components";

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    width: 100%;
`;

export const PanelHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const PanelTitle = styled.h3`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.h5};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const ErrorMessage = styled.p`
    margin: 0;

    padding: ${({ theme }) =>
        theme.spacing.sm};

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.danger}15;

    color: ${({ theme }) =>
        theme.colors.danger};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) =>
        theme.spacing.sm};
`;

export const SectionTitle = styled.h4`
    margin: 0;

    color: ${({ theme }) =>
        theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const Divider = styled.hr`
    width: 100%;

    margin: ${({ theme }) =>
        theme.spacing.xs} 0;

    border: 0;

    border-top: 1px solid
        ${({ theme }) =>
            theme.colors.border};
`;

export const DebugSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) =>
        theme.spacing.xs};
`;

export const DebugTitle = styled.h4`
    margin: 0;

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};
`;

export const DebugContent = styled.pre`
    margin: 0;

    padding: ${({ theme }) =>
        theme.spacing.sm};

    overflow-x: auto;

    border-radius: ${({ theme }) =>
        theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.surface};

    color: ${({ theme }) =>
        theme.colors.gray};

    font-size: 11px;
    line-height: 1.5;
`;
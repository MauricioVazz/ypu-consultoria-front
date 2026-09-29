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
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const SaveButton = styled.button`
    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};

    padding: ${({ theme }) =>
        `${theme.spacing.xs} ${theme.spacing.sm}`};

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    cursor: pointer;

    transition:
        opacity 0.2s ease,
        background 0.2s ease;

    &:hover:not(:disabled) {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.p`
    margin: 0;

    padding: ${({ theme }) => theme.spacing.sm};

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.danger}15;
    color: ${({ theme }) => theme.colors.danger};

    font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled.h4`
    margin: 0;

    color: ${({ theme }) => theme.colors.text};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const ImageGrid = styled.div`
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: ${({ theme }) => theme.spacing.sm};
`;

export const ImageOption = styled.button`
    position: relative;

    display: block;

    width: 100%;

    padding: 0;

    overflow: hidden;

    border: 2px solid
        ${({ theme, $selected }) =>
            $selected
                ? theme.colors.primary
                : theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) =>
        theme.colors.surface};

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        border-color: ${({ theme }) =>
            theme.colors.primary};

        transform: translateY(-1px);
    }
`;

export const ImagePreview = styled.img`
    display: block;

    width: 100%;
    aspect-ratio: 1 / 1;

    object-fit: cover;
`;

export const SelectedLabel = styled.span`
    position: absolute;

    left: ${({ theme }) => theme.spacing.xs};
    bottom: ${({ theme }) => theme.spacing.xs};

    padding:
        ${({ theme }) => theme.spacing.xs}
        ${({ theme }) => theme.spacing.sm};

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    font-weight: ${({ theme }) =>
        theme.typography.fontWeight.semibold};
`;

export const EmptyMessage = styled.p`
    margin: 0;

    padding: ${({ theme }) => theme.spacing.md};

    border: 1px dashed
        ${({ theme }) => theme.colors.border};

    border-radius: ${({ theme }) => theme.radius.sm};

    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};

    text-align: center;
`;

export const LoadingMessage = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};
`;

export const Divider = styled.hr`
    width: 100%;

    margin: ${({ theme }) => theme.spacing.xs} 0;

    border: 0;
    border-top: 1px solid
        ${({ theme }) => theme.colors.border};
`;

export const DebugSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const DebugTitle = styled.h4`
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) =>
        theme.typography.fontSize.small};
`;

export const DebugContent = styled.pre`
    margin: 0;

    padding: ${({ theme }) => theme.spacing.sm};

    overflow-x: auto;

    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.gray};

    font-size: 11px;
    line-height: 1.5;
`;
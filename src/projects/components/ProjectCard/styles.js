
import styled from "styled-components";
import Link from "next/link";

export const ProjectCardContainer = styled.article`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};

    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(29, 71, 58, 0.10);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const ProjectCover = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 5 / 4;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.canvas};

    > span {
        display: block;
    }

    img {
        transition: transform 0.5s ease;
    }

    ${ProjectCardContainer}:hover & img {
        transform: scale(1.04);
    }
`;

export const CoverPlaceholder = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xs};

    color: ${({ theme }) => theme.colors.gray};

    svg {
        font-size: 32px;
        opacity: 0.65;
    }

    span {
        font-size: ${({ theme }) => theme.typography.fontSize.small};
    }
`;

export const EditButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;

    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: ${({ theme }) => theme.radius.sm};

    background: rgba(255, 255, 255, 0.94);
    color: ${({ theme }) => theme.colors.darkGreen};

    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
        transform: translateY(-2px);
    }

    svg {
        font-size: 17px;
    }
`;

export const ProjectInfo = styled.div`
    flex: 1;
    min-height: 230px;
    padding: ${({ theme }) => theme.spacing.md};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const ProjectCategory = styled.span`
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-transform: uppercase;
    letter-spacing: 0.07em;
`;

export const ProjectTitle = styled.h2`
    margin: 0;

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.typography.fontSize.h5};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ProjectDivider = styled.div`
    width: 40px;
    height: 3px;
    margin: 4px 0;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
`;

export const ProjectSummary = styled.p`
    margin: 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: 1.7;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ProjectFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};

    margin-top: auto;
    padding-top: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectStatus = styled.span`
    display: inline-flex;
    align-items: center;

    padding: 6px 10px;

    border-radius: ${({ theme }) => theme.radius.sm};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    ${({ theme, status }) => status === "PUBLISHED" ? `
        color: ${theme.colors.green};
        background: ${theme.colors.primary}20;
    ` : `
        color: ${theme.colors.warning};
        background: ${theme.colors.warning}20;
    `}
`;

export const ViewProjectLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    padding: 9px 13px;

    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.green};

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    text-decoration: none;

    transition: ${({ theme }) => theme.transition.fast};

    svg {
        transition: transform 0.2s ease;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};

        svg {
            transform: translate(2px, -2px);
        }
    }
`;


import styled from "styled-components";

export const Page = styled.main`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;

    padding: clamp(48px, 7vw, 88px) clamp(16px, 4vw, 56px) 80px;

    background: ${({ theme }) => theme.colors.background};
`;

export const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin-bottom: 36px;
`;

export const Intro = styled.div`
    max-width: 760px;
`;

export const Eyebrow = styled.span`
    display: inline-block;
    margin-bottom: 12px;

    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    letter-spacing: 0.09em;
    text-transform: uppercase;
`;

export const PageTitle = styled.h1`
    margin: 0;

    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: clamp(32px, 4vw, 46px);
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: 1.15;
    letter-spacing: -0.035em;
`;

export const PageDescription = styled.p`
    max-width: 650px;
    margin: 16px 0 0;

    color: ${({ theme }) => theme.colors.gray};
    font-size: clamp(14px, 1.4vw, 16px);
    line-height: 1.8;
`;

export const ProjectsToolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 480px) {
        align-items: flex-start;
        flex-wrap: wrap;
    }
`;

export const ProjectCount = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 9px;

    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.typography.fontSize.small};

    svg {
        font-size: 17px;
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const CreateButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    padding: 12px 18px;

    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};

    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    font: inherit;
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};

    svg {
        font-size: 17px;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 3px;
    }

    @media (max-width: 480px) {
        margin-left: auto;
    }
`;

export const StateMessage = styled.div`
    min-height: 180px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    color: ${({ theme, $error }) =>
        $error ? theme.colors.danger : theme.colors.gray};

    font-size: 15px;
    text-align: center;
`;

export const EmptyState = styled.div`
    min-height: 300px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 1px dashed ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.colors.white};

    svg {
        margin-bottom: 16px;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 36px;
    }

    h2 {
        margin: 0;
        color: ${({ theme }) => theme.colors.darkGreen};
        font-size: 20px;
    }

    p {
        max-width: 420px;
        margin: 10px 0 0;

        color: ${({ theme }) => theme.colors.gray};
        font-size: 14px;
        line-height: 1.7;
    }
`;

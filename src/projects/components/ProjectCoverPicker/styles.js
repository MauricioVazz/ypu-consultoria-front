
import styled from "styled-components";

export const PickerContainer = styled.div`
    width: 100%;
    margin-top: 12px;
`;

export const ImagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 12px;
`;

export const ImageOption = styled.button`
    position: relative;
    padding: 0;
    overflow: hidden;
    aspect-ratio: 1;
    border: 2px solid ${({ $selected, theme }) =>
        $selected ? theme.colors.primary : theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: transparent;
    cursor: pointer;
`;

export const ImagePreview = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const EmptyMessage = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
`;

export const StatusMessage = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
`;

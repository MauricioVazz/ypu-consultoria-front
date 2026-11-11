"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";

import BuilderContainer from "@/pageBuilder/components/ui/BuilderContainer";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

import {
    SectionContainer,
    SectionOverlay,
    SectionContent,
    SectionChildren,
} from "./styles";

export default function Section({
    block,
    children,
    parentBlock = null,
    ancestors = [],
    onSectionDragOver,
    onSectionDrop,
    draggedRow,
    onSectionDragLeave,
    dragOverSectionId,
}) {
    const { isSelected, handleSelect } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    const { content } = block;

    const style = resolveStyle(content);

    return (
        <SectionContainer
            onClick={handleSelect}
            onDragOver={event => onSectionDragOver?.(event, block)}
            onDragLeave={event => onSectionDragLeave?.(event, block)}
            onDrop={event => onSectionDrop?.(event, block)}
            $isDropTarget={dragOverSectionId === block.publicId}
            $paddingTop={style.paddingTop}
            $paddingBottom={style.paddingBottom}
            $background={style.background}
            $minHeight={style.minHeight}
            $isSelected={isSelected}
        >
            {content.overlay && (
                <SectionOverlay
                    $opacity={content.overlayOpacity ?? 50}
                />
            )}

            <SectionContent>
                <BuilderContainer maxWidth={content.maxWidth}>
                    <SectionChildren $gap={style.gap}>
                        {children}
                    </SectionChildren>
                </BuilderContainer>
            </SectionContent>
        </SectionContainer>
    );
}
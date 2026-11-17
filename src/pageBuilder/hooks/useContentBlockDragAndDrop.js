
"use client";

import { useState } from "react";
import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useContentBlockDragAndDrop() {
    const [draggedBlock, setDraggedBlock] = useState(null);
    const [contentDropPosition, setContentDropPosition] = useState(null);

    const moveBlockLocal = useBuilderStore(
        state => state.moveBlockLocal
    );

    const clearDragState = () => {
        setDraggedBlock(null);
        setContentDropPosition(null);
    };

    const handleContentDragStart = (
        event,
        block,
        previewElement
    ) => {
        event.stopPropagation();

        setDraggedBlock(block);

        event.dataTransfer.effectAllowed = "move";

        event.dataTransfer.setData(
            "application/json",
            JSON.stringify({
                publicId: block.publicId,
                type: block.type,
            })
        );

        if (previewElement) {
            event.dataTransfer.setDragImage(
                previewElement,
                18,
                22
            );
        }
    };

    const handleContentDragOver = (
        event,
        targetBlock,
        parentBlock
    ) => {
        if (!draggedBlock || !parentBlock) return;

        if (draggedBlock.publicId === targetBlock.publicId) {
            setContentDropPosition(null);
            return;
        }

        event.preventDefault();

        const rect = event.currentTarget.getBoundingClientRect();

        // Verificar se o cursor está na metade superior ou inferior.
        const isAfter =
            event.clientY > rect.top + rect.height / 2;

        const targetIndex = parentBlock.children?.findIndex(
            child => child.publicId === targetBlock.publicId
        ) ?? -1;

        if (targetIndex === -1) return;

        let position = targetIndex + (isAfter ? 1 : 0);

        // Ajustar a posição quando a movimentação ocorre na mesma Column.
        const isSameColumn =
            draggedBlock.parentId === parentBlock.id;

        if (isSameColumn && draggedBlock.position < position) {
            position--;
        }

        setContentDropPosition({
            targetParentPublicId: parentBlock.publicId,
            targetBlockPublicId: targetBlock.publicId,
            position,
            side: isAfter ? "after" : "before",
        });
    };

    const handleContentDrop = (
        event,
        targetBlock,
        parentBlock
    ) => {
        event.preventDefault();
        event.stopPropagation();

        if (!draggedBlock || !parentBlock) return;

        const isValidTarget =
            contentDropPosition?.targetParentPublicId ===
            parentBlock.publicId &&
            contentDropPosition?.targetBlockPublicId ===
            targetBlock.publicId;

        if (!isValidTarget) return;

        moveBlockLocal(
            draggedBlock.publicId,
            contentDropPosition.targetParentPublicId,
            contentDropPosition.position
        );

        clearDragState();
    };

    const handleContentDragLeave = (event, targetBlock) => {
        const relatedTarget = event.relatedTarget;

        // Ainda está dentro do mesmo bloco.
        if (
            relatedTarget &&
            event.currentTarget.contains(relatedTarget)
        ) {
            return;
        }

        setContentDropPosition(current => {
            if (
                current?.targetBlockPublicId !== targetBlock.publicId
            ) {
                return current;
            }

            return null;
        });
    };

    const handleContentDragEnd = () => {
        clearDragState();
    };

    return {
        draggedBlock,
        contentDropPosition,

        handleContentDragStart,
        handleContentDragEnd,
        handleContentDragOver,
        handleContentDragLeave,
        handleContentDrop,
    };
}

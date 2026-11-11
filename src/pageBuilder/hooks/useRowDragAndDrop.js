
import { useState } from "react";
import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useRowDragAndDrop() {
    const [draggedRow, setDraggedRow] = useState(null);

    const [dragOverSectionId, setDragOverSectionId] = useState(null);

    const [rowDropPosition, setRowDropPosition] = useState(null);

    const moveRowLocal = useBuilderStore(
        state => state.moveRowLocal
    );

    const clearDragState = () => {
        setDraggedRow(null);
        setDragOverSectionId(null);
        setRowDropPosition(null);
    };

    const handleDragStart = (event, row, previewElement) => {
        event.stopPropagation();

        setDraggedRow(row);

        event.dataTransfer.effectAllowed = "move";

        event.dataTransfer.setData(
            "application/json",
            JSON.stringify({
                publicId: row.publicId,
                type: row.type,
            })
        );

        if (previewElement) {
            event.dataTransfer.setDragImage(previewElement, 18, 22);
        }
    };

    const handleSectionDragOver = (event, section) => {
        if (!draggedRow) return;

        event.preventDefault();
        event.dataTransfer.dropEffect = "move";

        setDragOverSectionId(section.publicId);

        // Se o cursor estiver diretamente no espaço vazio da Section, removemos o indicador de uma Row anterior.
        if (event.target === event.currentTarget) {
            setRowDropPosition(null);
        }
    };

    const handleSectionDrop = (event, section) => {
        event.preventDefault();
        event.stopPropagation();

        if (!draggedRow) return;

        const position = section.children?.length ?? 0;

        moveRowLocal(
            draggedRow.publicId,
            section.publicId,
            position
        );

        clearDragState();
    };

    const handleRowDragOver = (event, row, section) => {
        
        if (!draggedRow || !section) return;

        if (draggedRow.publicId === row.publicId) {
            setRowDropPosition(null);
            return;
        }

        event.preventDefault();

        const rect = event.currentTarget.getBoundingClientRect();

        // Verificar se o cursor está na metade superior ou inferior.
        const isAfter = event.clientY > rect.top + rect.height / 2;

        // Encontrar a posição atual da Row sobre a qual estamos passando.
        const targetIndex = section.children?.findIndex(
            child => child.publicId === row.publicId
        ) ?? -1;

        if (targetIndex === -1) return;

        // Calcular a posição antes ou depois da Row de destino.
        let position = targetIndex + (isAfter ? 1 : 0);

        // Ajustar quando a movimentação ocorre dentro da mesma Section.
        const isSameSection = draggedRow.parentId === section.id;

        if (isSameSection && draggedRow.position < position) {
            position--;
        }

        setRowDropPosition({
            sectionPublicId: section.publicId,
            position,
            targetRowPublicId: row.publicId,
            side: isAfter ? "after" : "before",
        });
    };

    const handleRowDrop = (event, row, section) => {
        event.preventDefault();
        event.stopPropagation();

        if (!draggedRow || !section) return;

        const isValidTarget =
            rowDropPosition?.sectionPublicId === section.publicId &&
            rowDropPosition?.targetRowPublicId === row.publicId;

        if (!isValidTarget) return;

        moveRowLocal(
            draggedRow.publicId,
            section.publicId,
            rowDropPosition.position
        );

        clearDragState();
    };

    const handleSectionDragLeave = (event, section) => {
        if (event.currentTarget.contains(event.relatedTarget)) return;

        setDragOverSectionId(current =>
            current === section.publicId ? null : current
        );

        setRowDropPosition(current =>
            current?.sectionPublicId === section.publicId
                ? null
                : current
        );
    };

    const handleDragEnd = () => {
        clearDragState();
    };

    return {
        draggedRow,
        rowDropPosition,
        dragOverSectionId,

        handleDragStart,
        handleDragEnd,
        handleRowDragOver,
        handleRowDrop,

        handleSectionDragOver,
        handleSectionDrop,
        handleSectionDragLeave,
    };
}

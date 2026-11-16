
import { useState } from "react";
import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useColumnDragAndDrop() {
    const [draggedColumn, setDraggedColumn] = useState(null);

    const [columnDropPosition, setColumnDropPosition] = useState(null);

    const moveColumnLocal = useBuilderStore(
        state => state.moveColumnLocal
    );

    const clearDragState = () => {
        setDraggedColumn(null);
        setColumnDropPosition(null);
    };

    const handleColumnDragStart = (event, column, previewElement) => {
        event.stopPropagation();

        setDraggedColumn(column);

        event.dataTransfer.effectAllowed = "move";

        event.dataTransfer.setData(
            "application/json",
            JSON.stringify({
                publicId: column.publicId,
                type: column.type,
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

    const handleColumnDragOver = (event, column, row) => {
        if (!draggedColumn || !row) return;

        if (draggedColumn.publicId === column.publicId) {
            setColumnDropPosition(null);
            return;
        }

        event.preventDefault();

        const rect = event.currentTarget.getBoundingClientRect();

        // Verificar se o cursor está na metade esquerda ou direita.
        const isAfter = event.clientX > rect.left + rect.width / 2;

        // Encontrar a posição atual da Column de destino.
        const targetIndex = row.children?.findIndex(
            child => child.publicId === column.publicId
        ) ?? -1;

        if (targetIndex === -1) return;

        // Calcular a posição antes ou depois da Column.
        let position = targetIndex + (isAfter ? 1 : 0);

        // Ajustar quando a movimentação ocorre dentro da mesma Row.
        const isSameRow = draggedColumn.parentId === row.id;

        if (isSameRow && draggedColumn.position < position) {
            position--;
        }

        setColumnDropPosition({
            rowPublicId: row.publicId,
            position,
            targetColumnPublicId: column.publicId,
            side: isAfter ? "after" : "before",
        });
    };

    const handleColumnDrop = (event, column, row) => {
        event.preventDefault();
        event.stopPropagation();

        if (!draggedColumn || !row) return;

        const isValidTarget =
            columnDropPosition?.rowPublicId === row.publicId &&
            columnDropPosition?.targetColumnPublicId === column.publicId;

        if (!isValidTarget) return;

        moveColumnLocal(
            draggedColumn.publicId,
            row.publicId,
            columnDropPosition.position
        );

        clearDragState();
    };

    const handleColumnDragEnd = () => {
        clearDragState();
    };

    return {
        draggedColumn,
        columnDropPosition,

        handleColumnDragStart,
        handleColumnDragEnd,
        handleColumnDragOver,
        handleColumnDrop,
    };
}

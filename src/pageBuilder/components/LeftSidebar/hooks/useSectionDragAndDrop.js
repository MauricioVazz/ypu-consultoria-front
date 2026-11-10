
import { useRef, useState } from "react";

export default function useSectionDragAndDrop(sections, moveBlockLocal) {
    const draggedSectionId = useRef(null);
    const [dropTarget, setDropTarget] = useState(null);

    const handleDragStart = (sectionId, event) => {
        draggedSectionId.current = sectionId;

        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", sectionId);
    };

    const handleDragOver = (sectionId, event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";

        const rect = event.currentTarget.getBoundingClientRect();
        const middle = rect.top + rect.height / 2;

        const position = event.clientY < middle ? "before" : "after";

        setDropTarget({
            publicId: sectionId,
            position,
        });
    };

    const handleDrop = (sectionId, event) => {
        event.preventDefault();

        const draggedId =
            draggedSectionId.current ||
            event.dataTransfer.getData("text/plain");

        if (!draggedId || draggedId === sectionId) {
            handleDragEnd();
            return;
        }

        const sourceIndex = sections.findIndex(
            section => section.publicId === draggedId
        );

        const targetIndex = sections.findIndex(
            section => section.publicId === sectionId
        );

        if (sourceIndex === -1 || targetIndex === -1) {
            handleDragEnd();
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const middle = rect.top + rect.height / 2;

        const dropAfter = event.clientY >= middle;

        let newPosition = targetIndex + (dropAfter ? 1 : 0);

        // A posição precisa ser ajustada porque o bloco
        // de origem será removido antes de ser inserido.
        if (sourceIndex < newPosition) {
            newPosition -= 1;
        }

        moveBlockLocal(draggedId, null, newPosition);

        handleDragEnd();
    };

    const handleDragEnd = () => {
        draggedSectionId.current = null;
        setDropTarget(null);
    };

    return {
        dropTarget,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragEnd,
    };
}

"use client";

import { PageContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";
import BlockRenderer from "@/pageBuilder/renderer/BlockRenderer";
import { getViewportWidth } from "@/pageBuilder/utils/viewport";
import useRowDragAndDrop from "@/pageBuilder/hooks/useRowDragAndDrop";

export default function Page() {

    const {
        draggedRow,
        rowDropPosition,
        dragOverSectionId,
        handleDragStart,
        handleDragEnd,
        handleRowDragOver,
        handleSectionDragOver,
        handleSectionDragLeave,
        handleSectionDrop,
        handleRowDrop,
    } = useRowDragAndDrop();

    const layout = useBuilderStore(
        state => state.layout
    );

    const viewport = useBuilderStore(
        state => state.viewport
    );

    const width = getViewportWidth(viewport);

    return (
        <PageContainer $width={width}>

            {!layout.length ? (

                <p>Nenhum bloco adicionado.</p>

            ) : (

                layout.map((block) => (
                    <BlockRenderer
                        key={block.publicId}
                        block={block}
                        onRowDragStart={handleDragStart}
                        onRowDragEnd={handleDragEnd}
                        onSectionDragOver={handleSectionDragOver}
                        onSectionDrop={handleSectionDrop}
                        onSectionDragLeave={handleSectionDragLeave}
                        draggedRow={draggedRow}
                        dragOverSectionId={dragOverSectionId}
                        onRowDragOver={handleRowDragOver}
                        onRowDrop={handleRowDrop}
                        rowDropPosition={rowDropPosition}
                    />
                ))

            )}

        </PageContainer>
    );
}
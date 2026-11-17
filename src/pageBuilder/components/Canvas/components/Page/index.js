"use client";

import { PageContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";
import BlockRenderer from "@/pageBuilder/renderer/BlockRenderer";
import { getViewportWidth } from "@/pageBuilder/utils/viewport";
import useRowDragAndDrop from "@/pageBuilder/hooks/useRowDragAndDrop";
import useColumnDragAndDrop from "@/pageBuilder/hooks/useColumnDragAndDrop";
import useContentBlockDragAndDrop from "@/pageBuilder/hooks/useContentBlockDragAndDrop";

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

    const {
        draggedColumn,
        columnDropPosition,
        handleColumnDragStart,
        handleColumnDragEnd,
        handleColumnDragOver,
        handleColumnDrop,
    } = useColumnDragAndDrop();

    const {
        draggedBlock,
        contentDropPosition,
        handleContentDragStart,
        handleContentDragEnd,
        handleContentDragOver,
        handleContentDragLeave,
        handleContentDrop,
    } = useContentBlockDragAndDrop();

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

                        onSectionDragOver={handleSectionDragOver}
                        onSectionDrop={handleSectionDrop}
                        onSectionDragLeave={handleSectionDragLeave}
                        dragOverSectionId={dragOverSectionId}

                        onRowDragStart={handleDragStart}
                        onRowDragEnd={handleDragEnd}
                        draggedRow={draggedRow}
                        onRowDragOver={handleRowDragOver}
                        onRowDrop={handleRowDrop}
                        rowDropPosition={rowDropPosition}

                        draggedColumn={draggedColumn}
                        columnDropPosition={columnDropPosition}
                        onColumnDragStart={handleColumnDragStart}
                        onColumnDragEnd={handleColumnDragEnd}
                        onColumnDragOver={handleColumnDragOver}
                        onColumnDrop={handleColumnDrop}

                        onContentDragStart={handleContentDragStart}
                        onContentDragEnd={handleContentDragEnd}
                        onContentDragOver={handleContentDragOver}
                        onContentDrop={handleContentDrop}
                        contentDropPosition={contentDropPosition}
                        onContentDragLeave={handleContentDragLeave}
                    />
                ))

            )}

        </PageContainer>
    );
}
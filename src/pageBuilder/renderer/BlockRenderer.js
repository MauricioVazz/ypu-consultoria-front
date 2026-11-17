import { blocks } from "@/editor";
import { validateBlock } from "../utils/validateBlock.js";
import BlockWrapper from "./BlockWrapper";


export default function BlockRenderer({
    block,
    parentBlock = null,
    ancestors = [],

    onRowDragStart,
    onRowDragEnd,
    onSectionDragOver,
    onSectionDrop,
    draggedRow,
    onSectionDragLeave,
    dragOverSectionId,
    onRowDragOver,
    rowDropPosition,
    onRowDrop,

    draggedColumn,
    columnDropPosition,
    onColumnDragStart,
    onColumnDragEnd,
    onColumnDragOver,
    onColumnDrop,

    onContentDragStart,
    onContentDragEnd,
    onContentDragOver,
    onContentDrop,
    contentDropPosition,
    onContentDragLeave,
}) {

    if (!validateBlock(block)) {
        return null;
    }

    const Component = blocks[block.type];

    if (!Component) {
        return null;
    }

    return (
        <BlockWrapper
            block={block}
            parentBlock={parentBlock}
            ancestors={ancestors}

            onContentDragStart={onContentDragStart}
            onContentDragEnd={onContentDragEnd}
            onContentDragOver={onContentDragOver}
            onContentDrop={onContentDrop}
            contentDropPosition={contentDropPosition}
            onContentDragLeave={onContentDragLeave}
        >
            <Component
                block={block}
                parentBlock={parentBlock}
                ancestors={ancestors}
                
                onSectionDragOver={onSectionDragOver}
                onSectionDrop={onSectionDrop}
                onSectionDragLeave={onSectionDragLeave}
                dragOverSectionId={dragOverSectionId}

                onRowDragStart={onRowDragStart}
                onRowDragEnd={onRowDragEnd}
                draggedRow={draggedRow}
                rowDropPosition={rowDropPosition}
                onRowDrop={onRowDrop}
                onRowDragOver={onRowDragOver}

                draggedColumn={draggedColumn}
                columnDropPosition={columnDropPosition}
                onColumnDragStart={onColumnDragStart}
                onColumnDragEnd={onColumnDragEnd}
                onColumnDragOver={onColumnDragOver}
                onColumnDrop={onColumnDrop}
            >
                {block.children?.map(child => (
                    <BlockRenderer
                        key={child.publicId}
                        block={child}
                        parentBlock={block}
                        ancestors={[...ancestors, block,]}

                        onSectionDragOver={onSectionDragOver}
                        onSectionDrop={onSectionDrop}
                        onSectionDragLeave={onSectionDragLeave}
                        dragOverSectionId={dragOverSectionId}

                        onRowDragStart={onRowDragStart}
                        onRowDragEnd={onRowDragEnd}
                        draggedRow={draggedRow}
                        onRowDragOver={onRowDragOver}
                        rowDropPosition={rowDropPosition}
                        onRowDrop={onRowDrop}

                        draggedColumn={draggedColumn}
                        columnDropPosition={columnDropPosition}
                        onColumnDragStart={onColumnDragStart}
                        onColumnDragEnd={onColumnDragEnd}
                        onColumnDragOver={onColumnDragOver}
                        onColumnDrop={onColumnDrop}

                        onContentDragStart={onContentDragStart}
                        onContentDragEnd={onContentDragEnd}
                        onContentDragOver={onContentDragOver}
                        onContentDrop={onContentDrop}
                        contentDropPosition={contentDropPosition}
                        onContentDragLeave={onContentDragLeave}
                    />
                ))}
            </Component>
        </BlockWrapper>
    );
}
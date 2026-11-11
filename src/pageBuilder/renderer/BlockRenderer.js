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
        >
            <Component
                block={block}
                parentBlock={parentBlock}
                ancestors={ancestors}
                onRowDragStart={onRowDragStart}
                onRowDragEnd={onRowDragEnd}
                onSectionDragOver={onSectionDragOver}
                onSectionDrop={onSectionDrop}
                draggedRow={draggedRow}
                onSectionDragLeave={onSectionDragLeave}
                dragOverSectionId={dragOverSectionId}
                onRowDragOver={onRowDragOver}
                rowDropPosition={rowDropPosition}
                onRowDrop={onRowDrop}
            >
                {block.children?.map(child => (
                    <BlockRenderer
                        key={child.publicId}
                        block={child}
                        parentBlock={block}
                        ancestors={[...ancestors, block,]}
                        onRowDragStart={onRowDragStart}
                        onRowDragEnd={onRowDragEnd}
                        onSectionDragOver={onSectionDragOver}
                        onSectionDrop={onSectionDrop}
                        draggedRow={draggedRow}
                        onSectionDragLeave={onSectionDragLeave}
                        dragOverSectionId={dragOverSectionId}
                        onRowDragOver={onRowDragOver}
                        rowDropPosition={rowDropPosition}
                        onRowDrop={onRowDrop}
                    />
                ))}
            </Component>
        </BlockWrapper>
    );
}
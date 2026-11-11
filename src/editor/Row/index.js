"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

import {
    RowContainer,
    RowDragHandle,
} from "./styles";

import { FiMove } from "react-icons/fi";

import { useRef } from "react";

export default function Row({
    block,
    children,
    parentBlock = null,
    ancestors = [],
    onRowDragStart,
    onRowDragEnd,
    onRowDragOver,
    onRowDrop,
    rowDropPosition,
}) {
    const {
        isSelected,
        handleSelect,
    } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    const { content } = block;

    const style = resolveStyle(content);

    const rowRef = useRef(null);

    const isDropBefore =
        rowDropPosition?.targetRowPublicId === block.publicId &&
        rowDropPosition?.side === "before";

    const isDropAfter =
        rowDropPosition?.targetRowPublicId === block.publicId &&
        rowDropPosition?.side === "after";

    return (
        <RowContainer
            ref={rowRef}
            onClick={handleSelect}
            onDragOver={event =>
                onRowDragOver?.(event, block, parentBlock)
            }
            onDrop={event =>
                onRowDrop?.(event, block, parentBlock)
            }
            $isSelected={isSelected}
            $style={style}
            $dropBefore={isDropBefore}
            $dropAfter={isDropAfter}
        >
            <RowDragHandle
                title="Mover linha"
                draggable={true}
                onClick={event => event.stopPropagation()}
                onDragStart={event =>
                    onRowDragStart(event, block, rowRef.current)
                }
                onDragEnd={onRowDragEnd}
            >
                <FiMove size={15} />
            </RowDragHandle>

            {children}
        </RowContainer>
    );
}

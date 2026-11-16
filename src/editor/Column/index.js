"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";

import {
    ColumnContainer,
    ColumnDragHandle,
} from "./styles";

import { FiMove } from "react-icons/fi";

import { useRef } from "react";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";
import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function Column({
    block,
    children,
    parentBlock = null,
    ancestors = [],
    draggedColumn,
    columnDropPosition,
    onColumnDragStart,
    onColumnDragEnd,
    onColumnDragOver,
    onColumnDrop,
}) {
    const viewport = useBuilderStore(
        state => state.viewport
    );

    const { content = {} } = block;

    const style = resolveStyle(content);

    const { isSelected, handleSelect } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    const isDropBefore =
        columnDropPosition?.targetColumnPublicId === block.publicId &&
        columnDropPosition?.side === "before";

    const isDropAfter =
        columnDropPosition?.targetColumnPublicId === block.publicId &&
        columnDropPosition?.side === "after";

    const columnRef = useRef(null);

    const handleDragStart = event => {
        event.stopPropagation();

        onColumnDragStart?.(
            event,
            block,
            columnRef.current
        );
    };

    return (
        <ColumnContainer
            ref={columnRef}
            $viewport={viewport}
            $desktop={content.desktop}
            $tablet={content.tablet}
            $mobile={content.mobile}
            $style={style}
            $isSelected={isSelected}
            $dropBefore={isDropBefore}
            $dropAfter={isDropAfter}
            onClick={handleSelect}
            onDragOver={event =>
                onColumnDragOver?.(event, block, parentBlock)
            }
            onDrop={event =>
                onColumnDrop?.(event, block, parentBlock)
            }
        >
            <ColumnDragHandle
                title="Mover coluna"
                draggable={true}
                onClick={event => event.stopPropagation()}
                onDragStart={handleDragStart}
                onDragEnd={onColumnDragEnd}
            >
                <FiMove size={14} />
            </ColumnDragHandle>

            {children}
        </ColumnContainer>
    );
}
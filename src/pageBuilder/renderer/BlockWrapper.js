
"use client";

import { useRef, useState } from "react";
import { FiMove } from "react-icons/fi";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

export default function BlockWrapper({
    block,
    children,
    parentBlock = null,
    ancestors = [],
    onContentDragStart,
    onContentDragEnd,
    onContentDragOver,
    onContentDrop,
    contentDropPosition,
    onContentDragLeave,
}) {
    const wrapperRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const {
        isSelected,
        handleSelect,
    } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    const layoutBlocks = [
        "SECTION",
        "ROW",
        "COLUMN",
    ];

    const isLayoutBlock = layoutBlocks.includes(block.type);

    if (isLayoutBlock) {
        return children;
    }

    const isDropBefore =
        contentDropPosition?.targetBlockPublicId === block.publicId &&
        contentDropPosition?.side === "before";

    const isDropAfter =
        contentDropPosition?.targetBlockPublicId === block.publicId &&
        contentDropPosition?.side === "after";

    const handleDragStart = event => {
        event.stopPropagation();

        onContentDragStart?.(
            event,
            block,
            wrapperRef.current
        );
    };

    return (
        <div
            ref={wrapperRef}
            className="content-block-wrapper"
            onClick={handleSelect}
            onDragOver={event =>
                onContentDragOver?.(event, block, parentBlock)
            }
            onDrop={event =>
                onContentDrop?.(event, block, parentBlock)
            }
            onDragLeave={event =>
                onContentDragLeave?.(event, block)
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: "relative",
                outline: isSelected
                    ? "3px solid #3B82F6"
                    : "1px dashed transparent",
                outlineOffset: "-1px",
                cursor: "pointer",
                borderTop: isDropBefore
                    ? "3px solid #3B82F6"
                    : undefined,
                borderBottom: isDropAfter
                    ? "3px solid #3B82F6"
                    : undefined,
            }}
        >
            <button
                className="content-drag-handle"
                type="button"
                title="Mover bloco"
                draggable
                onClick={event => event.stopPropagation()}
                onDragStart={handleDragStart}
                onDragEnd={onContentDragEnd}
                style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 6,
                    border: "none",
                    borderRadius: 4,
                    background: "#FFFFFF",
                    color: "#333333",
                    cursor: "grab",
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? "auto" : "none",
                    transition: "opacity 0.2s ease",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}
            >
                <FiMove size={14} />
            </button>

            {children}
        </div>
    );
}

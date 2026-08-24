"use client";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

const layoutBlocks = [
    "SECTION",
    "ROW",
    "COLUMN",
];

export default function BlockWrapper({ block, children, parentBlock = null, ancestors = [], }) {

    const { isSelected, handleSelect, } = useBlockSelection( block, parentBlock, ancestors, );

    const isLayoutBlock =
        layoutBlocks.includes(block.type);

    if (isLayoutBlock) {
        return children;
    }

    return (
        <div
            onClick={handleSelect}
            style={{
                position: "relative",

                outline: isSelected
                    ? "3px solid #3B82F6"
                    : "1px dashed transparent",

                outlineOffset: "-1px",

                cursor: "pointer",
            }}
        >
            {children}
        </div>
    );
}
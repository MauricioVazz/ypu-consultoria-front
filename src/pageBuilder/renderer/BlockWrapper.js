"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

const layoutBlocks = [
    "SECTION",
    "ROW",
    "COLUMN",
];

export default function BlockWrapper({ block, children, parentBlock = null, ancestors = [], }) {

    const selectedBlock = useBuilderStore(
        state => state.selectedBlock
    );

    const selectBlock = useBuilderStore(
        state => state.selectBlock
    );

    const isSelected =
        selectedBlock?.publicId === block.publicId;

    const isLayoutBlock =
        layoutBlocks.includes(block.type);

    const getTargetBlock = ({
        block,
        ancestors,
        selectedBlock,
        altKey,
    }) => {

        if (!altKey) {
            return block;
        }

        const blockPath = [
            ...ancestors,
            block,
        ];

        const selectedIndex = blockPath.findIndex(
            item =>
                item.publicId === selectedBlock?.publicId
        );

        if (selectedIndex > 0) {
            return blockPath[selectedIndex - 1];
        }

        if (selectedIndex === 0) {
            return blockPath[0];
        }

        return ancestors.at(-1) ?? block;
    };

    const handleClick = (e) => {
        e.stopPropagation();

        const targetBlock = getTargetBlock({
            block,
            parentBlock,
            ancestors,
            selectedBlock,
            altKey: e.altKey,
        });

        console.log(
            "CLICK:",
            block.type,
            block.publicId,
            "ALT:",
            e.altKey,
            "CURRENT:",
            selectedBlock?.type,
            "SELECT:",
            targetBlock.type,
            targetBlock.publicId
        );

        selectBlock(targetBlock);
    };

    if (isLayoutBlock) {
        return children;
    }

    console.log(
        "BLOCK:",
        block.type,
        "PARENT:",
        parentBlock?.type
    );

    return (
        <div
            onClick={handleClick}
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
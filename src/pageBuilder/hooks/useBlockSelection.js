"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useBlockSelection(block, parentBlock = null, ancestors = []) {

    const selectedId = useBuilderStore(
        state => state.selectedBlock?.publicId
    );

    const selectBlock = useBuilderStore(
        state => state.selectBlock
    );

    const isSelected =
        selectedId === block.publicId;

    const getTargetBlock = (altKey) => {

        if (!altKey) {
            return block;
        }

        const blockPath = [
            ...ancestors,
            block,
        ];

        const selectedIndex = blockPath.findIndex(
            item =>
                item.publicId === selectedId
        );

        if (selectedIndex > 0) {
            return blockPath[selectedIndex - 1];
        }

        if (selectedIndex === 0) {
            return blockPath[0];
        }

        return parentBlock ?? block;
    };

    const handleSelect = (e) => {

        e.stopPropagation();

        const targetBlock =
            getTargetBlock(e.altKey);

        selectBlock(targetBlock);
    };

    return {
        isSelected,
        handleSelect,
    };
}
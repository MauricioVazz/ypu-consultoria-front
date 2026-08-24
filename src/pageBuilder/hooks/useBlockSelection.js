"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function useBlockSelection(block, parentBlock = null) {

    const selectedId = useBuilderStore(
        state => state.selectedBlock?.publicId
    );

    const selectBlock = useBuilderStore(
        state => state.selectBlock
    );

    const isSelected =
        selectedId === block.publicId;


    const handleSelect = (e) => {

        e.stopPropagation();

        console.log(
            "SELECT:",
            block.type,
            block.publicId,
            "PARENT:",
            parentBlock?.type
        );

        selectBlock(block);
    };


    return {
        isSelected,
        handleSelect,
    };
}
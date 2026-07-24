"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function BlockWrapper({ block, children }) {

    const selectedBlock = useBuilderStore(state => state.selectedBlock);

    const selectedId = useBuilderStore(
        state => state.selectedBlock?.publicId
    );

    const selectBlock = useBuilderStore(
        state => state.selectBlock
    );

    // console.log("SELECTED", selectedBlock?.type, selectedBlock?.publicId);

    const isSelected = selectedId === block.publicId;

    return (
        <div
            onClick={(e) => {

                e.stopPropagation();

                console.log("CLICK:", block.type, block.publicId);

                selectBlock(block);

            }}
            style={{
                position: "relative",
                outline: isSelected ? "3px solid #3B82F6" : "1px dashed transparent",
                cursor: "pointer",
            }}
        >
            {children}
        </div>
    );
}
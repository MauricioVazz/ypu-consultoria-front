"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

export default function Row({ block, children }) {

    const { isSelected, handleSelect } = useBlockSelection(block);

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <div
            onClick={handleSelect}
            style={{
                display: "flex",
                flexWrap: content.wrap ? "wrap" : "nowrap",

                position: "relative",

                width: "100%",

                boxSizing: "border-box",

                background: "transparent",

                outline: isSelected
                    ? "3px solid #3B82F6"
                    : "1px dashed transparent",

                outlineOffset: "-3px",

                cursor: "pointer",

                ...style,
            }}
        >

            {children}

        </div>

    );

}
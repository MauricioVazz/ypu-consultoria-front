"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { resolveGridSpan } from "@/renderer/theme/resolveToken";
import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

export default function Column({ block, children, parentBlock }) {

    const { isSelected, handleSelect } = useBlockSelection(block, parentBlock);

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <div
            onClick={handleSelect}
            style={{
                display: "flex",
                flexDirection: "column",

                position: "relative",

                gap: style.gap,

                padding: style.padding,

                flexGrow: 1,
                flexShrink: 1,
                flexBasis: resolveGridSpan(content.desktop),

                maxWidth: resolveGridSpan(content.desktop),

                minWidth: 0,

                boxSizing: "border-box",

                background: "rgba(255, 0, 0, 0.05)", // Remover

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
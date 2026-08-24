"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import Container from "@/components/ui/Container";
import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

export default function Section({ block, children, parentBlock = null, ancestors = [], }) {
    
    const { isSelected, handleSelect } = useBlockSelection(block, parentBlock, ancestors);

    const { content } = block;
    const style = resolveStyle(content);

    return (
        <section
            onClick={handleSelect}
            style={{
                position: "relative",
                overflow: "hidden",

                outline: isSelected
                    ? "3px solid #3B82F6"
                    : "1px dashed transparent",
                
                outlineOffset: "-3px",

                cursor: "pointer",
                
                ...style,

                // ...editorStyle,
            }}
        >
            {content.overlay && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `rgba(0,0,0,${(content.overlayOpacity ?? 50) / 100
                            })`,
                        zIndex: 0,
                    }}
                />
            )}

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Container maxWidth={content.maxWidth}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: style.gap,
                        }}
                    >
                        {children}
                    </div>
                </Container>
            </div>
        </section>
    );
}
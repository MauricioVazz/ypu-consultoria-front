import { resolveStyle } from "@/renderer/theme/resolveStyle";
import Container from "@/components/ui/Container";

export default function Section({ block, children }) {
    //console.log("ROW CHILDREN", block.children);

    //console.log("ROW FILE");

    const { content } = block;
    const style = resolveStyle(content);

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                ...style,
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
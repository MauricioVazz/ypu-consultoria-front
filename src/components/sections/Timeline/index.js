import Grid from "@/components/layout/Grid";
import Card from "@/components/card/Card";
import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { resolveFontSize, resolveColor } from "@/renderer/theme/resolveToken";

export default function Timeline({ block }) {
    const { items = [] } = block.content;

    return (
        <div style={resolveStyle(block.content)}>
            <Grid columns={1} gap="LG">
                {items.map((item, index) => (
                    <Card key={index}>
                        <div style={{ display: "flex", gap: "16px" }}>
                            
                            {/* número da etapa */}
                            <div
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    background: resolveColor("PRIMARY"),
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "14px",
                                    flexShrink: 0,
                                }}
                            >
                                {index + 1}
                            </div>

                            {/* conteúdo */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                
                                <h3
                                    style={{
                                        fontSize: resolveFontSize("H4"),
                                        margin: 0,
                                        color: resolveColor("TEXT"),
                                    }}
                                >
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p
                                        style={{
                                            fontSize: resolveFontSize("P"),
                                            margin: 0,
                                            color: resolveColor("GRAY"),
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}
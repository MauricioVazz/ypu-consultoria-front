import Grid from "@/components/ui/Grid";
import Card from "@/components/ui/Card";
import { theme } from "@/styles/theme";

import {
    resolveColor,
    resolveFontSize,
    resolveSpacing,
    resolveRadius,
} from "@/renderer/theme/resolveToken";

export default function Metrics({ block }) {

    const { content } = block;

    return (
        <Grid
            columns={content.columns || 4}
            gap="MD"
        >

            {content.items?.map((item, index) => (

                <Card
                    key={index}
                    style={{
                        textAlign: "center",

                        padding: resolveSpacing("LG"),
                        borderRadius: resolveRadius("MD"),

                        border: `1px solid ${theme.colors.border}`,
                        background: theme.colors.white,

                        boxShadow: "0 6px 18px rgba(0,0,0,0.04)",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >

                    <h2
                        style={{
                            margin: 0,

                            fontSize: resolveFontSize("H2"),
                            color: resolveColor("PRIMARY"),

                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        {item.value}
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            marginTop: resolveSpacing("XS"),

                            color: resolveColor("GRAY"),
                            fontSize: resolveFontSize("P"),
                        }}
                    >
                        {item.label}
                    </p>

                </Card>

            ))}

        </Grid>
    );
}
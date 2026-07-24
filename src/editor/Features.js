import Grid from "@/components/ui/Grid";
import { theme } from "@/styles/theme";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { resolveCardStyle } from "@/renderer/theme/resolveCardStyle";

import {
    resolveFontSize,
    resolveColor,
    resolveSpacing,
} from "@/renderer/theme/resolveToken";

export default function Features({ block }) {

    const { content } = block;

    const style = resolveStyle(content);

    const cardStyle = resolveCardStyle(content);

    return (

        <Grid
            columns={content.columns}
            gap={content.gap}
        >

            {content.items?.map((item, index) => (

                <div
                    key={index}
                    style={{
                        ...cardStyle,

                        display: "flex",
                        flexDirection: "column",

                        alignItems:
                            content.align === "CENTER"
                                ? "center"
                                : "flex-start",

                        textAlign: style.textAlign || "center",

                        height: "100%",

                        boxSizing: "border-box",
                    }}
                >

                    {item.icon && (

                        <div
                            style={{
                                width: 56,
                                height: 56,

                                margin: content.align === "CENTER"
                                    ? `0 auto ${resolveSpacing("MD")}`
                                    : `0 0 ${resolveSpacing("MD")} 0`,

                                borderRadius: "50%",

                                background: theme.colors.primary,
                                color: theme.colors.white,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                fontSize: 24,
                            }}
                        >
                            {item.icon}
                        </div>

                    )}

                    <h3
                        style={{
                            width: "100%",
                            margin: 0,
                            marginBottom: resolveSpacing("SM"),

                            textAlign: style.textAlign || "center",

                            color: resolveColor("TEXT"),

                            fontSize: resolveFontSize("H4"),

                            fontWeight: theme.typography.fontWeight.bold,
                        }}
                    >
                        {item.title}
                    </h3>

                    <p
                        style={{
                            width: "100%",
                            margin: 0,

                            color: resolveColor("GRAY"),

                            fontSize: resolveFontSize("P"),

                            lineHeight: theme.typography.lineHeight.body,

                            textAlign: style.textAlign || "center",
                        }}
                    >
                        {item.description}
                    </p>

                </div>

            ))}

        </Grid>

    );

}
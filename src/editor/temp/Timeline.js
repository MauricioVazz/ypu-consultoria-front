import { theme } from "@/styles/theme";

import { resolveStyle } from "@/renderer/theme/resolveStyle";

import {
    resolveFontSize,
    resolveColor,
    resolveSpacing,
} from "@/renderer/theme/resolveToken";

export default function Timeline({ block }) {

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: resolveSpacing(content.gap || "LG"),
            }}
        >

            {content.items?.map((item, index) => {

                const last = index === content.items.length - 1;

                return (

                    <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: resolveSpacing("LG"),
                            alignItems: "stretch",
                            paddingBottom: last ? "32px" : "0",
                        }}
                    >

                        {/* COLUNA DA TIMELINE */}

                        <div
                            style={{
                                width: 24,

                                display: "flex",
                                flexDirection: "column",

                                alignItems: "center",

                                flexShrink: 0,
                            }}
                        >

                            {/* Bolinha */}

                            <div
                                style={{
                                    width: 18,
                                    height: 18,

                                    borderRadius: "50%",

                                    background: theme.colors.white,

                                    border: `4px solid ${theme.colors.primary}`,

                                    zIndex: 2,
                                }}
                            />

                            {/* Linha */}

                            <div
                                style={{
                                    width: 2,
                                    flex: 1,
                                    height: last ? "40px" : undefined,
                                    background: theme.colors.border,

                                    marginBottom: last ? 0 : resolveSpacing("MD"),
                                }}
                            />

                        </div>

                        {/* CONTEÚDO */}

                        <div
                            style={{
                                flex: 1,

                                paddingBottom: last
                                    ? resolveSpacing("MD")
                                    : resolveSpacing("XL"),

                                textAlign: style.textAlign,
                            }}
                        >

                            {content.showDate && item.date && (

                                <small
                                    style={{
                                        display: "block",

                                        color: resolveColor("PRIMARY"),

                                        marginBottom:
                                            resolveSpacing("XS"),

                                        fontWeight: 600,
                                    }}
                                >
                                    {item.date}
                                </small>

                            )}

                            <h3
                                style={{
                                    margin: 0,

                                    marginBottom:
                                        resolveSpacing("SM"),

                                    fontSize:
                                        resolveFontSize("H4"),

                                    color:
                                        resolveColor("TEXT"),

                                    fontWeight:
                                        theme.typography.fontWeight.bold,
                                }}
                            >
                                {item.title}
                            </h3>

                            {item.description && (

                                <p
                                    style={{
                                        margin: 0,

                                        color:
                                            resolveColor("GRAY"),

                                        fontSize:
                                            resolveFontSize("P"),

                                        lineHeight:
                                            theme.typography.lineHeight.body,
                                    }}
                                >
                                    {item.description}
                                </p>

                            )}

                        </div>

                    </div>

                );

            })}

        </div>

    );

}
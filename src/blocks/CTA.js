import {
    resolveButtonStyle,
    resolveButtonSize,
    resolveTextAlign,
    resolveRadius,
    resolveWidth,
    resolveShadow,
} from "@/renderer/theme/resolveToken";

import { theme } from "@/styles/theme";

export default function CTA({ block }) {
    const { content } = block;

    const buttonStyle = resolveButtonStyle(content.variant);
    const buttonSize = resolveButtonSize(content.size);

    return (
        <div
            style={{
                textAlign: resolveTextAlign(content.align),
            }}
        >
            <a
                href={content.href}
                style={{
                    display: "inline-block",
                    width: resolveWidth(content.width),
                    textAlign: "center",
                    textDecoration: "none",

                    fontFamily:
                        theme.typography.fontFamily,

                    fontWeight:
                        theme.typography.fontWeight.bold,

                    borderRadius:
                        resolveRadius(content.radius),

                    boxShadow:
                        resolveShadow(content.shadow),

                    transition:
                        theme.button.transition,

                    cursor: "pointer",

                    ...buttonStyle,
                    ...buttonSize,
                }}
            >
                {content.text}
            </a>
        </div>
    );
}
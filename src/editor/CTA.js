import {
    resolveButtonStyle,
    resolveButtonSize,
    resolveTextAlign
} from "@/renderer/theme/resolveToken";

import { theme } from "@/styles/theme";

export default function CTA({ block }) {

    const { content } = block;

    const buttonStyle = resolveButtonStyle(content.style);

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

                    display: content.fullWidth
                        ? "block"
                        : "inline-block",

                    width: content.fullWidth
                        ? "100%"
                        : "auto",

                    textAlign: "center",

                    textDecoration: "none",

                    fontFamily: theme.typography.fontFamily,

                    fontWeight: theme.typography.fontWeight.bold,

                    borderRadius: theme.button.radius,

                    transition: theme.button.transition,

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
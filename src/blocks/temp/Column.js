import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { resolveGridSpan } from "@/renderer/theme/resolveToken";

export default function Column({ block, children }) {

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",

                gap: style.gap,

                padding: style.padding,

                flexGrow: 1,
                flexShrink: 1,
                flexBasis: resolveGridSpan(content.desktop),

                maxWidth: resolveGridSpan(content.desktop),

                minWidth: 0,

                boxSizing: "border-box",

                ...style,
            }}
        >

            {children}

        </div>

    );

}
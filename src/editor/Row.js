import BlockRenderer from "@/renderer/BlockRenderer";
import { resolveStyle } from "@/renderer/theme/resolveStyle";

export default function Row({ block, children }) {

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <div
            style={{
                display: "flex",
                flexWrap: content.wrap ? "wrap" : "nowrap",

                width: "100%",

                boxSizing: "border-box",

                background: "transparent",

                ...style,
            }}
        >

            {children}

        </div>

    );

}
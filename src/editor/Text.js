import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { baseParagraphStyle } from "@/renderer/theme/textStyles";

export default function Text({ block }) {

    const { content } = block;

    const style = resolveStyle(content);

    return (

        <p
            style={{
                ...baseParagraphStyle,
                ...style,
            }}
        >
            {content.content}
        </p>

    );

}
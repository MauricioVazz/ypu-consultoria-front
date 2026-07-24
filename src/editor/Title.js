import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { baseHeadingStyle } from "@/renderer/theme/textStyles";

export default function Title({ block }) {

    const { content } = block;

    const style = resolveStyle(content);

    const headingMap = {
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
    };

    const Heading = headingMap[content.level] ?? "h2";

    return (

        <Heading
            style={{
                ...baseHeadingStyle,
                ...style,
            }}
        >
            {content.text}
        </Heading>

    );

}
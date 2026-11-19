
import { resolveStyle } from "@/renderer/theme/resolveStyle";

import { ColumnContainer } from "./styles";

export default function Column({ block, children }) {
    const { content = {} } = block;

    const style = resolveStyle(content);

    return (
        <ColumnContainer
            $desktop={content.desktop}
            $tablet={content.tablet}
            $mobile={content.mobile}
            $style={style}
        >
            {children}
        </ColumnContainer>
    );
}


import { resolveStyle } from "@/renderer/theme/resolveStyle";

import { RowContainer } from "./styles";

export default function Row({ block, children }) {
    const { content = {} } = block;

    const style = resolveStyle(content);

    return (
        <RowContainer $style={style}>
            {children}
        </RowContainer>
    );
}

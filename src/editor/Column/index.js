"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";
import { ColumnContainer } from "./styles";

export default function Column({
    block,
    children,
    parentBlock = null,
    ancestors = [],
}) {
    const {
        isSelected,
        handleSelect,
    } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    const { content = {} } = block;

    const style = resolveStyle(content);

    return (
        <ColumnContainer
            $desktop={content.desktop}
            $tablet={content.tablet}
            $mobile={content.mobile}
            $style={style}
            $isSelected={isSelected}
            onClick={handleSelect}
        >
            {children}
        </ColumnContainer>
    );
}
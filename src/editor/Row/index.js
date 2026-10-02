"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";

import {
    RowContainer,
} from "./styles";

export default function Row({
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

    const { content } = block;

    const style = resolveStyle(content);

    return (
        <RowContainer
            onClick={handleSelect}
            $isSelected={isSelected}
            $style={style}
        >
            {children}
        </RowContainer>
    );
}
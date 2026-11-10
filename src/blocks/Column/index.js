"use client";

import { resolveStyle } from "@/renderer/theme/resolveStyle";

import { ColumnContainer } from "./styles";

import useBlockSelection from "@/pageBuilder/hooks/useBlockSelection";
import useBuilderStore from "@/pageBuilder/store/builderStore";

export default function Column({
    block,
    children,
    parentBlock = null,
    ancestors = [],
}) {
    const viewport = useBuilderStore(
        state => state.viewport
    );

    const { content = {} } = block;

    const style = resolveStyle(content);

    const { isSelected, handleSelect } = useBlockSelection(
        block,
        parentBlock,
        ancestors
    );

    return (
        <ColumnContainer
            $viewport={viewport}
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
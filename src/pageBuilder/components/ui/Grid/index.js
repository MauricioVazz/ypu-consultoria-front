"use client";

import { Children } from "react";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import { GridWrapper } from "./styles";

export default function Grid({
    columns = 3,
    gap = "MD",
    children,
}) {
    const viewport = useBuilderStore(
        state => state.viewport
    );

    const items = Children.toArray(children);

    const responsiveColumns =
        viewport === "mobile"
            ? 1
            : viewport === "tablet"
                ? Math.min(columns, 2)
                : columns;

    return (
        <GridWrapper
            $columns={responsiveColumns}
            $gap={gap}
            $itemCount={items.length}
            $viewport={viewport}
        >
            {items}
        </GridWrapper>
    );
}
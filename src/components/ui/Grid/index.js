import { Children } from "react";
import { GridWrapper } from "./styles";

export default function Grid({
    columns = 3,
    gap = "MD",
    children,
}) {
    const items = Children.toArray(children);

    return (
        <GridWrapper
            $columns={columns}
            $gap={gap}
            $itemCount={items.length}
        >
            {items}
        </GridWrapper>
    );
}
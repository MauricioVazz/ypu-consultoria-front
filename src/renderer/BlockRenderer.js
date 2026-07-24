import { blocks } from "@/blocks";
import { validateBlock } from "./utils/validateBlock";

export default function BlockRenderer({ block }) {
    if (!validateBlock(block)) {
        console.warn("Bloco inválido:", block);
        return null;
    }

    const Component = blocks[block.type];

    if (!Component) {
        console.warn("Bloco não registrado:", block.type);
        return null;
    }

    return (
        <Component block={block}>
            {block.children?.map(child => (
                <BlockRenderer
                    key={child.publicId}
                    block={child}
                />
            ))}
        </Component>
    );
}
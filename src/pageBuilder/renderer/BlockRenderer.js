import { blocks } from "@/editor";
import { validateBlock } from "../utils/validateBlock.js";
import BlockWrapper from "./BlockWrapper";

export default function BlockRenderer({ block }) {

    console.log("Render:", block.type);
    
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
        <BlockWrapper block={block}>
            <Component block={block}>
                {block.children?.map(child => (
                    <BlockRenderer
                        key={child.publicId}
                        block={child}
                    />
                ))}
            </Component>
        </BlockWrapper>
    );
}
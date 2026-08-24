import { blocks } from "@/editor";
import { validateBlock } from "../utils/validateBlock.js";
import BlockWrapper from "./BlockWrapper";

export default function BlockRenderer({ block, parentBlock = null, ancestors = [], }) {

    //console.log("Render:", block.type);

    if (!validateBlock(block)) {
        //console.warn("Bloco inválido:", block);
        return null;
    }

    const Component = blocks[block.type];

    if (!Component) {
        //console.warn("Bloco não registrado:", block.type);
        return null;
    }

    return (
        <BlockWrapper
            block={block}
            parentBlock={parentBlock}
            ancestors={ancestors}
        >
            <Component
                block={block}
                parentBlock={parentBlock}
                ancestors={ancestors}
            >
                {block.children?.map(child => (
                    <BlockRenderer
                        key={child.publicId}
                        block={child}
                        parentBlock={block}
                        ancestors={[...ancestors, block,]}
                    />
                ))}
            </Component>
        </BlockWrapper>
    );
}
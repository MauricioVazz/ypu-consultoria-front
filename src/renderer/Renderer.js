import BlockRenderer from "./BlockRenderer";

export default function Renderer({ blocks = [] }) {
    return (
        <>
            {blocks.map((block) => (
                <BlockRenderer
                    key={block.publicId}
                    block={block}
                />
            ))}
        </>
    );
}
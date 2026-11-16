export function serializeLayout(layout) {
    if (!Array.isArray(layout)) {
        throw new Error("Estrutura do layout inválida.");
    }

    const blocks = [];

    function traverse(blocksList, parentPublicId = null) {
        blocksList.forEach((block, index) => {
            if (!block.publicId) {
                throw new Error("Bloco sem identificador público.");
            }

            blocks.push({
                publicId: block.publicId,
                parentPublicId,
                position: index,
            });

            if (Array.isArray(block.children) && block.children.length > 0) {
                traverse(block.children, block.publicId);
            }
        });
    }

    traverse(layout);

    return blocks;
}

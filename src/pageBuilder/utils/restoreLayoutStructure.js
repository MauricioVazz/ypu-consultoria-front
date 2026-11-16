export function restoreLayoutStructure(layout, savedStructure) {
    const currentBlocks = new Map();

    function collectBlocks(blocks) {
        blocks.forEach(block => {
            currentBlocks.set(block.publicId, block);

            if (block.children?.length) {
                collectBlocks(block.children);
            }
        });
    }

    collectBlocks(layout);

    const restoredBlocks = new Map();

    savedStructure.forEach(item => {
        const currentBlock = currentBlocks.get(item.publicId);

        if (!currentBlock) return;

        restoredBlocks.set(item.publicId, {
            ...currentBlock,
            children: [],
            position: item.position,
        });
    });

    const rootBlocks = [];

    savedStructure.forEach(item => {
        const block = restoredBlocks.get(item.publicId);

        if (!block) return;

        if (!item.parentPublicId) {
            block.parentId = null;
            rootBlocks.push(block);
            return;
        }

        const parent = restoredBlocks.get(item.parentPublicId);

        if (!parent) {
            throw new Error(
                `Pai não encontrado ao restaurar o bloco ${item.publicId}.`
            );
        }

        block.parentId = parent.id;
        parent.children.push(block);
    });

    function sortChildren(blocks) {
        blocks.sort((a, b) => a.position - b.position);

        blocks.forEach(block => {
            sortChildren(block.children);
        });
    }

    sortChildren(rootBlocks);

    return rootBlocks;
}
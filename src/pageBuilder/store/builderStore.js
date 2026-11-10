'use client';

import { create } from 'zustand';

const findBlockByPublicId = (blocks, publicId) => {
    for (const block of blocks) {
        if (block.publicId === publicId) {
            return block;
        }

        if (block.children?.length) {
            const found = findBlockByPublicId(
                block.children,
                publicId
            );

            if (found) {
                return found;
            }
        }
    }

    return null;
};

const isDescendantInTree = (block, publicId) => {
    if (!block.children?.length) {
        return false;
    }

    for (const child of block.children) {
        if (child.publicId === publicId) {
            return true;
        }

        if (isDescendantInTree(child, publicId)) {
            return true;
        }
    }

    return false;
};

const removeBlockFromTree = (blocks, publicId) => {
    let removedBlock = null;

    const updatedBlocks = [];

    for (const block of blocks) {
        if (block.publicId === publicId) {
            removedBlock = block;
            continue;
        }

        let updatedBlock = block;

        if (block.children?.length) {
            const result = removeBlockFromTree(
                block.children,
                publicId
            );

            updatedBlock = {
                ...block,
                children: result.blocks,
            };

            if (result.removedBlock) {
                removedBlock = result.removedBlock;
            }
        }

        updatedBlocks.push(updatedBlock);
    }

    return {
        blocks: updatedBlocks.map((block, index) => ({
            ...block,
            position: index,
        })),
        removedBlock,
    };
};

const insertBlockIntoTree = (blocks, targetParentPublicId, movedBlock, position) => {
    // Inserção no nível principal da página
    if (!targetParentPublicId) {
        const updatedBlocks = [...blocks];

        updatedBlocks.splice(position, 0, {
            ...movedBlock,
            parentId: null,
        });

        return updatedBlocks.map((block, index) => ({
            ...block,
            position: index,
        }));
    }

    // Inserção dentro de um bloco pai
    return blocks.map(block => {
        if (block.publicId === targetParentPublicId) {
            const children = [...(block.children || [])];

            children.splice(position, 0, {
                ...movedBlock,
                parentId: block.id,
            });

            return {
                ...block,
                children: children.map((child, index) => ({
                    ...child,
                    position: index,
                })),
            };
        }

        if (block.children?.length) {
            return {
                ...block,
                children: insertBlockIntoTree(
                    block.children,
                    targetParentPublicId,
                    movedBlock,
                    position
                ),
            };
        }

        return block;
    });
};

const useBuilderStore = create((set, get) => ({

    project: null,

    projectPublicId: null,

    layout: [],

    selectedBlock: null,

    loading: false,

    viewport: 'desktop',

    dirtyBlocks: [],

    savedSectionOrder: [],

    originalSectionNumbers: {},

    setLayout: (layout) =>
        set({
            layout,

            savedSectionOrder: layout
                .filter(block => block.type === "SECTION")
                .map(block => block.publicId),

            originalSectionNumbers: Object.fromEntries(
                layout
                    .filter(block => block.type === "SECTION")
                    .map(block => [
                        block.publicId,
                        block.position + 1
                    ])
            ),
        }),

    hasSectionOrderChanges: () => {
        const { layout, savedSectionOrder } = get();

        const currentOrder = layout
            .filter(block => block.type === "SECTION")
            .map(block => block.publicId);

        return currentOrder.some(
            (publicId, index) => publicId !== savedSectionOrder[index]
        ) || currentOrder.length !== savedSectionOrder.length;
    },

    resetSectionOrder: () => {
        const { layout, savedSectionOrder, selectedBlock } = get();

        const sections = layout
            .filter(block => block.type === "SECTION")
            .sort((a, b) =>
                savedSectionOrder.indexOf(a.publicId) -
                savedSectionOrder.indexOf(b.publicId)
            );

        let sectionIndex = 0;

        const updatedLayout = layout.map(block => {
            if (block.type !== "SECTION") {
                return block;
            }

            return sections[sectionIndex++];
        });

        const updatedSelectedBlock = selectedBlock
            ? findBlockByPublicId(
                updatedLayout,
                selectedBlock.publicId
            )
            : null;

        set({
            layout: updatedLayout,
            selectedBlock: updatedSelectedBlock,
        });
    },

    markSectionOrderSaved: () => {
        const { layout, selectedBlock } = get();

        let position = 0;
        const updatedNumbers = {};

        const updatedLayout = layout.map(block => {
            if (block.type !== "SECTION") {
                return block;
            }

            const currentPosition = position++;

            updatedNumbers[block.publicId] = currentPosition + 1;

            return {
                ...block,
                position: currentPosition,
            };
        });

        const currentOrder = updatedLayout
            .filter(block => block.type === "SECTION")
            .map(block => block.publicId);

        const updatedSelectedBlock = selectedBlock
            ? findBlockByPublicId(updatedLayout, selectedBlock.publicId)
            : null;

        set({
            layout: updatedLayout,
            savedSectionOrder: currentOrder,
            originalSectionNumbers: updatedNumbers,
            selectedBlock: updatedSelectedBlock,
        });
    },

    setLoading: (loading) =>
        set({ loading }),

    setProjectPublicId: (projectPublicId) =>
        set({ projectPublicId }),

    selectBlock: (block) =>
        set({
            selectedBlock: block
        }),


    setViewport: (viewport) =>
        set({ viewport }),

    findBlock: publicId =>
        findBlockByPublicId(
            get().layout,
            publicId
        ),

    saveBlock: async publicId => {
        const block = findBlockByPublicId(
            get().layout,
            publicId
        );

        if (!block) {
            console.error(
                "Block not found:",
                publicId
            );
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/blocks/${publicId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        content: block.content,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();

                console.error(
                    "Backend save error:",
                    errorData
                );

                throw new Error(
                    `Failed to save block: ${response.status}`
                );
            }

            console.log(
                "Block saved successfully:",
                publicId
            );

            get().markBlockSaved(publicId);

        } catch (error) {
            console.error(
                "Error saving block:",
                error
            );

            throw error;
        }
    },

    updateBlock: (publicId, content) => {

        const update = (blocks) => {
            return blocks.map(block => {

                if (block.publicId === publicId) {
                    return {
                        ...block,
                        content: {
                            ...block.content,
                            ...content
                        }
                    };
                }

                return {
                    ...block,
                    children: block.children
                        ? update(block.children)
                        : []
                };
            });
        };

        set(state => {

            const layout = update(state.layout);

            const selectedBlock =
                state.selectedBlock?.publicId === publicId
                    ? {
                        ...state.selectedBlock,
                        content: {
                            ...state.selectedBlock.content,
                            ...content,
                        },
                    }
                    : state.selectedBlock;

            return {
                layout,
                selectedBlock,

                dirtyBlocks: state.dirtyBlocks.includes(publicId)
                    ? state.dirtyBlocks
                    : [...state.dirtyBlocks, publicId],
            };
        });

    },

    markBlockSaved: publicId =>
        set(state => ({
            dirtyBlocks: state.dirtyBlocks.filter(
                id => id !== publicId
            ),
        })),

    moveBlockLocal: (
        publicId,
        targetParentPublicId,
        position
    ) => {
        const state = get();

        const movedBlock = findBlockByPublicId(
            state.layout,
            publicId
        );

        if (!movedBlock) {
            return false;
        }

        // Impedir que o bloco seja pai dele mesmo
        if (targetParentPublicId === publicId) {
            return false;
        }

        const targetParent = targetParentPublicId
            ? findBlockByPublicId(
                state.layout,
                targetParentPublicId
            )
            : null;

        // Verificar se o destino existe
        if (targetParentPublicId && !targetParent) {
            return false;
        }

        // Impedir movimentação para dentro de um descendente
        if (
            targetParent &&
            isDescendantInTree(
                movedBlock,
                targetParentPublicId
            )
        ) {
            return false;
        }

        // Remover o bloco da posição atual
        const result = removeBlockFromTree(
            state.layout,
            publicId
        );

        if (!result.removedBlock) {
            return false;
        }

        // Obter a quantidade de elementos no destino
        const targetSiblings = targetParentPublicId
            ? findBlockByPublicId(
                result.blocks,
                targetParentPublicId
            )?.children || []
            : result.blocks;

        // Limitar a posição ao intervalo permitido
        const safePosition = Math.max(
            0,
            Math.min(position, targetSiblings.length)
        );

        // Inserir o bloco na nova posição
        const updatedLayout = insertBlockIntoTree(
            result.blocks,
            targetParentPublicId,
            result.removedBlock,
            safePosition
        );

        // Atualizar também a referência do bloco selecionado
        const selectedBlock = state.selectedBlock
            ? findBlockByPublicId(
                updatedLayout,
                state.selectedBlock.publicId
            )
            : null;

        set({
            layout: updatedLayout,
            selectedBlock,
        });

        return true;
    },

}));

export default useBuilderStore;
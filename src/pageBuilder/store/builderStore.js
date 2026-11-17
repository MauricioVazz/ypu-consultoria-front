'use client';

import { create } from 'zustand';

import { serializeLayout } from "@/pageBuilder/utils/serializeLayout";
import { restoreLayoutStructure } from "@/pageBuilder/utils/restoreLayoutStructure";

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
                parentId: block.publicId,
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

const getRowPositions = (blocks, parentPublicId = null) => {
    const positions = {};

    blocks.forEach((block, index) => {
        if (block.type === "ROW") {
            positions[block.publicId] = {
                parentPublicId,
                position: index,
            };
        }

        if (block.children?.length) {
            Object.assign(
                positions,
                getRowPositions(block.children, block.publicId)
            );
        }
    });

    return positions;
};

const findBlockById = (blocks, id) => {
    for (const block of blocks) {
        if (block.id === id) {
            return block;
        }

        if (block.children?.length) {
            const found = findBlockById(block.children, id);

            if (found) return found;
        }
    }

    return null;
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

    savedStructure: [],

    originalSectionNumbers: {},

    savedRowPositions: {},

    setLayout: (layout) =>
        set({
            layout,

            savedStructure: serializeLayout(layout),

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

            savedRowPositions: getRowPositions(layout),
        }),

    hasStructureChanges: () => {
        const { layout, savedStructure } = get();

        const currentStructure = serializeLayout(layout);

        return JSON.stringify(currentStructure) !==
            JSON.stringify(savedStructure);
    },

    markStructureSaved: () => {
        const { layout } = get();

        const currentOrder = layout
            .filter(block => block.type === "SECTION")
            .map(block => block.publicId);

        const updatedNumbers = Object.fromEntries(
            layout
                .filter(block => block.type === "SECTION")
                .map((block, index) => [
                    block.publicId,
                    index + 1,
                ])
        );

        set({
            savedStructure: serializeLayout(layout),
            savedSectionOrder: currentOrder,
            originalSectionNumbers: updatedNumbers,
            savedRowPositions: getRowPositions(layout),
        });
    },

    resetStructure: () => {
        const { layout, savedStructure, selectedBlock } = get();

        const restoredLayout = restoreLayoutStructure(
            layout,
            savedStructure
        );

        const updatedSelectedBlock = selectedBlock
            ? findBlockByPublicId(
                restoredLayout,
                selectedBlock.publicId
            )
            : null;

        set({
            layout: restoredLayout,
            selectedBlock: updatedSelectedBlock,
        });
    },

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

    moveRowLocal: (publicId, targetSectionPublicId, position) => {
        const { layout } = get();

        const row = findBlockByPublicId(layout, publicId);
        const targetSection = findBlockByPublicId(
            layout,
            targetSectionPublicId
        );

        // Validar a Row
        if (!row || row.type !== "ROW") return false;

        // Validar a Section de destino
        if (!targetSection || targetSection.type !== "SECTION") {
            return false;
        }

        // Validar a posição
        if (!Number.isInteger(position) || position < 0) {
            return false;
        }

        // Evitar movimentação para a mesma posição
        if (
            row.parentId === targetSection.id &&
            row.position === position
        ) {
            return false;
        }

        return get().moveBlockLocal(
            publicId,
            targetSectionPublicId,
            position
        );
    },

    hasRowChanges: () => {
        const { layout, savedRowPositions } = get();

        const currentPositions = getRowPositions(layout);

        const allRowIds = new Set([
            ...Object.keys(savedRowPositions),
            ...Object.keys(currentPositions),
        ]);

        return [...allRowIds].some(publicId => {
            const saved = savedRowPositions[publicId];
            const current = currentPositions[publicId];

            if (!saved || !current) return true;

            return (
                saved.parentPublicId !== current.parentPublicId ||
                saved.position !== current.position
            );
        });
    },

    resetRowPositions: () => {
        const { layout, savedRowPositions, selectedBlock } = get();

        let updatedLayout = layout;

        const rowsBySection = {};

        Object.entries(savedRowPositions).forEach(([publicId, original]) => {
            if (!rowsBySection[original.parentPublicId]) {
                rowsBySection[original.parentPublicId] = [];
            }

            rowsBySection[original.parentPublicId].push({
                publicId,
                position: original.position,
            });
        });

        Object.entries(rowsBySection).forEach(([sectionPublicId, rows]) => {
            rows.sort((a, b) => a.position - b.position);

            rows.forEach(({ publicId, position }) => {
                const result = removeBlockFromTree(updatedLayout, publicId);

                if (!result.removedBlock) return;

                updatedLayout = insertBlockIntoTree(
                    result.blocks,
                    sectionPublicId,
                    result.removedBlock,
                    position
                );
            });
        });

        const updatedSelectedBlock = selectedBlock
            ? findBlockByPublicId(updatedLayout, selectedBlock.publicId)
            : null;

        set({
            layout: updatedLayout,
            selectedBlock: updatedSelectedBlock,
        });
    },

    markRowPositionsSaved: () => {
        const { layout } = get();

        set({
            savedRowPositions: getRowPositions(layout),
        });
    },

    saveRowPositions: async () => {
        const { layout, savedRowPositions } = get();

        const currentPositions = getRowPositions(layout);

        const changedRows = Object.entries(currentPositions)
            .filter(([publicId, current]) => {
                const saved = savedRowPositions[publicId];

                if (!saved) return true;

                return (
                    saved.parentPublicId !== current.parentPublicId ||
                    saved.position !== current.position
                );
            })
            .map(([publicId, current]) => ({
                publicId,
                position: current.position,
                parentPublicId: current.parentPublicId,
            }));

        if (!changedRows.length) return false;

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/blocks/reorder`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(changedRows),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();

                console.error("Backend reorder error:", errorData);

                throw new Error(
                    `Failed to save row positions: ${response.status}`
                );
            }

            get().markRowPositionsSaved();

            return true;

        } catch (error) {
            console.error("Error saving row positions:", error);
            throw error;
        }
    },

    moveColumnLocal: (publicId, targetRowPublicId, position) => {
        const { layout } = get();

        const column = findBlockByPublicId(layout, publicId);
        const targetRow = findBlockByPublicId(
            layout,
            targetRowPublicId
        );

        // Validar a Column
        if (!column || column.type !== "COLUMN") return false;

        // Validar a Row de destino
        if (!targetRow || targetRow.type !== "ROW") return false;

        // Validar a posição
        if (!Number.isInteger(position) || position < 0) {
            return false;
        }

        // Evitar movimentação para a mesma posição
        if (
            column.parentId === targetRow.id &&
            column.position === position
        ) {
            return false;
        }

        return get().moveBlockLocal(
            publicId,
            targetRowPublicId,
            position
        );
    },

    addBlock: newBlock => {
        const state = get();

        const parent = newBlock.parentId
            ? findBlockById(state.layout, newBlock.parentId)
            : null;

        const parentPublicId = parent?.publicId || null;

        // Verificar se o pai existe
        if (newBlock.parentId && !parent) {
            return false;
        }

        // Identificar os elementos que estarão no mesmo nível
        const siblings = parent
            ? parent.children || []
            : state.layout;

        const position = Number.isInteger(newBlock.position)
            ? newBlock.position
            : siblings.length;

        // Inserir o bloco retornado pelo backend
        const updatedLayout = insertBlockIntoTree(
            state.layout,
            parentPublicId,
            {
                ...newBlock,
                children: [],
            },
            position
        );

        // Selecionar o bloco recém-criado
        const selectedBlock = findBlockByPublicId(
            updatedLayout,
            newBlock.publicId
        );

        set({
            layout: updatedLayout,
            selectedBlock,
        });

        return true;
    },

    deleteBlockLocal: publicId => {
        const { layout, selectedBlock, dirtyBlocks } = get();

        const targetBlock = findBlockByPublicId(layout, publicId);

        if (!targetBlock) return;

        const removedPublicIds = [];

        const collectPublicIds = block => {
            removedPublicIds.push(block.publicId);

            block.children?.forEach(collectPublicIds);
        };

        collectPublicIds(targetBlock);

        const { blocks: updatedLayout } = removeBlockFromTree(
            layout,
            publicId
        );

        const shouldClearSelection =
            selectedBlock &&
            removedPublicIds.includes(selectedBlock.publicId);

        set({
            layout: updatedLayout,
            selectedBlock: shouldClearSelection
                ? null
                : findBlockByPublicId(updatedLayout, selectedBlock.publicId),
            dirtyBlocks: dirtyBlocks.filter(
                id => !removedPublicIds.includes(id)
            ),
        });
    },

}));

export default useBuilderStore;
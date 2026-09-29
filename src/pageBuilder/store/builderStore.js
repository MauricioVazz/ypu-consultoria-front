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

const useBuilderStore = create((set, get) => ({

    project: null,

    projectPublicId: null,

    layout: [],

    selectedBlock: null,

    loading: false,

    viewport: 'desktop',

    dirtyBlocks: [],

    setLayout: (layout) =>
        set({ layout }),

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

}));

export default useBuilderStore;
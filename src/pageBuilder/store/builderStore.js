'use client';

import { create } from 'zustand';

const useBuilderStore = create((set, get) => ({

    project: null,

    layout: [],

    selectedBlock: null,

    loading: false,

    viewport: 'desktop',


    setLayout: (layout) =>
        set({ layout }),

    setLoading: (loading) =>
        set({ loading }),

    selectBlock: (block) =>
        set({
            selectedBlock: block
        }),


    setViewport: (viewport) =>
        set({ viewport }),


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
            };
        });

    },

}));

export default useBuilderStore;
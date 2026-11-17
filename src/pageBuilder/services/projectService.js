import { api } from "@/services/api";

export async function getProjectLayout(publicId) {
    const response = await api(
        `/projects/${publicId}/layout`
    );

    return response.blocks;
}

export async function getProjectLayoutWithProject(publicId) {
    return await api(
        `/projects/${publicId}/layout`
    );
}

export async function reorderBlocks(blocks) {
    return await api("/blocks/reorder", {
        method: "PATCH",
        body: JSON.stringify(blocks),
    });
}


export async function createBlock(publicId, blockData) {
    return await api(`/projects/${publicId}/blocks`, {
        method: "POST",
        body: JSON.stringify(blockData),
    });
}

export async function deleteBlock(publicId) {
    return await api(`/blocks/${publicId}`, {
        method: "DELETE",
    });
}
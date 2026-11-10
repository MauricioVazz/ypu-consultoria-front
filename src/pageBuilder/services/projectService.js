import { api } from "@/services/api";

export async function getProjectLayout(publicId) {
    const response = await api(
        `/projects/${publicId}/layout`
    );

    return response.blocks;
}

export async function reorderBlocks(blocks) {
    return await api("/blocks/reorder", {
        method: "PATCH",
        body: JSON.stringify(blocks),
    });
}
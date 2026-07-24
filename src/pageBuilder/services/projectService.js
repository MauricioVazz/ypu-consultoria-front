import { api } from "@/services/api";

export async function getProjectLayout(publicId) {
    const response = await api(
        `/projects/${publicId}/layout`
    );

    return response.blocks;
}